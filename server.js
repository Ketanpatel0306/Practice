const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.get("/home", (req, res) => {
    app.render(req, res, "/");
  });

  server.get("/aboutus", (req, res) => {
    app.render(req, res, "/Aboutus");
  });
  server.get("/sermon", (req, res) => {
    app.render(req, res, "/Sermon");
  });
  server.get("/blog", (req, res) => {
    app.render(req, res, "/Blog");
  });
  server.all("*", (req, res) => {
    return handle(req, res, "/");
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
