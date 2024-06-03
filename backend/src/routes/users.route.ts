import { Hono } from "hono";

const app = new Hono();

app.post("/signup", (c) => {
  return c.text("User Signup");
});

app.post("/signin", (c) => {
  return c.text("user signin");
});

export default app;
