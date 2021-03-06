const { createServer } = require("http");
const next = require("next");
console.log("SERVEr.js");

const app = next({
  dev: process.env.NODE_ENV !== "production",
});

const routes = require("./routes");

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if (err) throw err;
    console.log("Reader on localhost:3000");
  });
});
