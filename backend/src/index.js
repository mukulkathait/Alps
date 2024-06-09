import { Hono } from "hono";
import user from "./routes/users.route";
import blog from "./routes/blog.route";
const app = new Hono();
app.get("/", (c) => {
    return c.text("Hello Hono!");
});
app.route("/api/v1/user", user);
app.route("/api/v1/blog", blog);
export default app;
