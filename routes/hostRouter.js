const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res) => {
  res.send(``);
});

hostRouter.post("/host/add-home", (req, res) => {
  console.log("Home Details : ", req.body);
});

module.exports = hostRouter;
