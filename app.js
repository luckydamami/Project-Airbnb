const express = require("express"); //External Module

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter"); //local Module

const app = express();

app.use(express.urlencoded()); //Built-in Module
app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>404! Page Not Found.</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server start on port http://localhost:${PORT}`);
});
