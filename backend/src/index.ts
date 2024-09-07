import { Hono } from "hono";
import { cors } from "hono/cors";
import user from "./routes/users.route";
import blog from "./routes/blog.route";

const app = new Hono();

const corsOptions = {
  origin: "https://medium-six-puce.vercel.app",
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1/user", user);
app.route("/api/v1/blog", blog);

export default app;
