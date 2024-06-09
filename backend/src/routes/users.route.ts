import { Hono, Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupSchema, signinSchema } from "@mukulkathait/medium-common";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

function getPrismaClient(c: Context) {
  return new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
}

app.post("/signup", async (c) => {
  const prisma = getPrismaClient(c);
  const body = await c.req.json();
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
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    c.status(200);
    return c.json({
      success: true,
      message: "User created successfully",
      jwt,
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
        message: "User not found",
        error: "Invalid Credentials",
      });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      success: true,
      message: "User logged-in",
      jwt,
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

export default app;
