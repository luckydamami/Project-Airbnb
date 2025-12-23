const express = require("express"); //External Module
const path = require("path"); //Built-in Module
const userRouter = require("./routes/userRouter"); //local Module
const hostRouter = require("./routes/hostRouter");

const app = express();

const PORT = 3000;
app.use(express.urlencoded()); //Built-in Module
app.use(userRouter);
app.use(hostRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404page.html"));
});

app.listen(PORT, () => {
  console.log(`Server start on port http://localhost:${PORT}`);
});
