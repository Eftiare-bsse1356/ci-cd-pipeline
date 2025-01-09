const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World! This is a basic Node.js app.");
});

// This is the change: Export the Express app as a handler for Vercel
module.exports = (req, res) => {
  app(req, res);
};
