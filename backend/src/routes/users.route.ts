import { Hono, Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { signupSchema, signinSchema } from "@mukulkathait/medium-common";
import { getCookie, setCookie } from "hono/cookie";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
  };
}>();

function getPrismaClient(c: Context) {
  return new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
}

const generateAccessToken = async (userId: string, secret: string) => {
  return await sign(
    { id: userId, exp: Math.floor(Date.now() / 1000) + 60 * 15 },
    secret
  );
};

const generateRefreshToken = async (userId: String, secret: string) => {
  return await sign(
    { id: userId, exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60 * 1 },
    secret
  );
};

app.post("/signup", async (c) => {
  const prisma = getPrismaClient(c);
  const body = await c.req.json();
  console.log(body);
  const parsedBody = signupSchema.safeParse(body);

  if (!parsedBody.success) {
    c.status(411);
    return c.json({
      success: false,
      message: "Invalid Inputs (Zod Validations Failed)",
    });
  }

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });

    const accessToken = await generateAccessToken(
      user.id,
      c.env.ACCESS_TOKEN_SECRET
    );
    const refreshToken = await generateRefreshToken(
      user.id,
      c.env.REFRESH_TOKEN_SECRET
    );

    setCookie(c, "refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    c.status(200);
    return c.json({
      success: true,
      message: "User created successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    c.status(403);
    return c.json({
      success: false,
      message: "error while signing up",
      error,
    });
  }
});

app.post("/signin", async (c) => {
  const prisma = getPrismaClient(c);
  const body = await c.req.json();
  const parsedBody = signinSchema.safeParse(body);

  if (!parsedBody.success) {
    c.status(411);
    return c.json({
      success: false,
      message: "Invalid Inputs (Zod Validations Failed)",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({
        success: false,
        message: "Unauthorized: Invalid Credentials",
      });
    }

    const accessToken = await generateAccessToken(
      user.id,
      c.env.ACCESS_TOKEN_SECRET
    );
    const refreshToken = await generateRefreshToken(
      user.id,
      c.env.REFRESH_TOKEN_SECRET
    );

    setCookie(c, "refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    return c.json({
      success: true,
      message: "User logged-in",
      accessToken,
    });
  } catch (error) {
    c.status(403);
    return c.json({
      success: false,
      message: "error during user signup",
      error,
    });
  }
});

app.get("/refesh", async (c) => {
  const refreshToken = getCookie(c, "refreshToken");

  if (!refreshToken) {
    c.status(403);
    return c.json({ message: "Unauthorized" });
  }

  try {
    const payload = await verify(refreshToken, c.env.REFRESH_TOKEN_SECRET);
    if (!payload || !payload.userId) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    const accessToken = generateAccessToken(
      payload.id as string,
      c.env.ACCESS_TOKEN_SECRET
    );

    return c.json({
      success: true,
      message: "Access Token Generated",
      accessToken,
    });
  } catch (error) {
    c.status(403);
    return c.json({
      success: false,
      message: "Invalid Refresh Token",
      error,
    });
  }
});

app.get("/allusers", async (c) => {
  const prisma = getPrismaClient(c);
  try {
    const users = await prisma.user.findMany();
    return c.json({
      users,
    });
  } catch (error: any) {
    return c.text(error);
  }
});

app.delete("/allusers", async (c) => {
  const prisma = getPrismaClient(c);
  try {
    const users = await prisma.user.deleteMany();
    return c.json({
      users,
      success: true,
      message: "All Users Deleted",
    });
  } catch (error: any) {
    return c.json({
      error,
    });
  }
});

export default app;
