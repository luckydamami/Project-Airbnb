const express = require("express");
const path = require("path");
const rootDir = require("../utils/rootPath");
const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

hostRouter.post("/host/add-home", (req, res) => {
  console.log("Home Details : ", req.body);
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

module.exports = hostRouter;
