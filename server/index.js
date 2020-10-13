//Express
const path = require("path");
const express = require("express");
const helmet = require("helmet");

const app = express();
app.use(helmet());

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

let port = 3000;

app.listen(3000, () => {
  console.log(`server live on port ${port}`);
});
