import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context, Hono, Next } from "hono";
import { verify } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";
import { v2 as cloudinary } from "cloudinary";
import {
  createPostSchema,
  updatePostSchema,
} from "@mukulkathait/medium-common";

type Variables = JwtVariables;

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: Variables;
}>();

function getPrismaClient(c: Context) {
  return new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
}

/* MIDDLEWARES
references : https://hono.dev/guides/middleware */

/* here, for some routes we need to check where or not user is authenticated or not. And we check it by verifying the jwtToken in req.header.
Now there are 3 approaches for the same task with their pros & cons */

/* ------------------------------------------------------------------- */

/* Approach 1, argubly the best. Simply use the build in "jwt" middleware to verify.
Pros:
-it return the payload if it is present or just return status 403
-less code use need not to worry about the inner verification

Cons (this cons is for my specific usecase): 
-I don't want it to work for all the request on the same routes
-Further I want to return custom response, not just 403 Unauthorized*/
/* app.use("/*", (c, next) => {
  const jwtMiddelware = jwt({
    secret: c.env.JWT_SECRET,
  });
  return jwtMiddelware(c, next);
}); */

/* ------------------------------------------------------------------- */

/* Approach 2: It just returns the boolean and not the actual payload. In this case, I want the data inside the payload */
/* app.use(
  "/*",
  bearerAuth({
    verifyToken: async (token, c) => {
      return token === c.env.JWT_SECRET;
    },
  })
); */

/* ------------------------------------------------------------------- */

/* Approach 3: 
this approach works in the same way as approach 1 does, but I can't not use it on the specific routes i.e. it will work for all the routes that hits the endpoint.
It is actually dump to use this approach because one can complete use approach 1, coz it has cleaner syntax. But the only upside with this approch is, now you can send custom response */
/* app.use("/*", async (c, next) => {
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  const token = jwt.split(" ")[1];
  try {
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload || !payload.id) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    c.set("jwtPayload", payload);
    await next();
  } catch (error) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
}); */

/* ------------------------------------------------------------------- */

/* Approach 4: 
Best for my specific usecase:
-allows me to explicity call this middleware on the specific routes I want.
-allows me to send custome response */
const authMiddleware = async (c: Context, next: Next) => {
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  const token = jwt.split(" ")[1];
  try {
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload || !payload.id) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    c.set("jwtPayload", payload);
    await next();
  } catch (error) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
};

//Routes

app.post("/", authMiddleware, async (c) => {
  const prisma = getPrismaClient(c);
  const payload = c.get("jwtPayload");
  const body = await c.req.json();
  const parsedBody = createPostSchema.safeParse(body);

  if (!parsedBody.success) {
    console.log(parsedBody);
    c.status(400);
    return c.json({
      success: false,
      message: "Invalid Inputs (Zod Validation failed)",
    });
  }
  try {
    const post = await prisma.post.create({
      data: {
        title: parsedBody.data.title,
        content: parsedBody.data.content,
        authorId: payload.id,
      },
    });
    c.status(200);
    return c.json({
      success: true,
      message: "Blog posted successfully",
      blogId: post.id,
    });
  } catch (error) {
    console.log("Error: ", error);
    c.status(400);
    return c.json({ success: false, message: "Error during posting blog" });
  }
});

app.put("/", authMiddleware, async (c) => {
  const prisma = getPrismaClient(c);
  const payload = c.get("jwtPayload");
  const body = await c.req.json();
  const parsedBody = updatePostSchema.safeParse(body);

  if (!parsedBody.success) {
    c.status(400);
    return c.json({
      success: false,
      message: "Invalid Inputs (Zod Validation failed)",
    });
  }
  try {
    await prisma.post.update({
      where: {
        authorId: payload.id,
        id: parsedBody.data.id,
      },
      data: {
        title: parsedBody.data.title,
        content: parsedBody.data.content,
        published: parsedBody.data.published,
      },
    });
    c.status(200);
    return c.json({
      success: true,
      message: "Blog updated successfully",
    });
  } catch (error) {
    console.log("Error: ", error);
    c.status(400);
    return c.json({ success: false, message: "Error during posting post" });
  }
});

app.get("/:blogId", async (c) => {
  const prisma = getPrismaClient(c);
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: c.req.param("blogId"),
      },
    });
    c.status(200);
    return c.json({
      success: true,
      message: "Fetched blog successfully",
      data: post,
    });
  } catch (error) {
    console.log(error);
    c.status(400);
    return c.json({
      success: false,
      message: "Error during getting post",
    });
  }
});

app.get("/", async (c) => {
  const prisma = getPrismaClient(c);
  try {
    const posts = await prisma.post.findMany();
    c.status(200);
    return c.json({
      success: true,
      message: "All post fetched successfully",
      data: posts,
    });
  } catch (error) {
    console.log(error);
    c.status(400);
    return c.json({
      success: false,
      message: "Error during getting all posts",
    });
  }
});

app.delete("/allBlogs", async (c) => {
  const prisma = getPrismaClient(c);
  try {
    await prisma.post.deleteMany();
    return c.json({
      success: true,
    });
  } catch (error: any) {
    return c.text("Error");
  }
});

app.post("/upload", async (c) => {});

export default app;
