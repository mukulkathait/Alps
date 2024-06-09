import { Hono } from "hono";
const app = new Hono();
app.post("/", (c) => {
    return c.text("post blog");
});
app.put("/", (c) => {
    return c.text("put blog");
});
app.get("/:id", (c) => {
    const { id } = c.req.param();
    return c.text(`Blog ${id}`);
});
app.get("/bulk", (c) => {
    return c.text(`all blogs`);
});
export default app;
