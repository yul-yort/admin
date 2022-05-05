const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const dir = "serve-build";

app.use(express.static(path.join(__dirname, dir)));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, dir, "index.html"));
});

app.listen(9000, () => {
  console.log("Open http://localhost:9000/");
});

process.on("exit", function () {
  fs.rmSync(dir, { recursive: true, force: true });
});

process.on("SIGINT", function () {
  process.exit();
});

process.on("SIGQUIT", function () {
  process.exit();
});

process.on("SIGTERM", function () {
  process.exit();
});
