const express = require("express"); //External Module
const path = require("path"); //Built-in Module
const userRouter = require("./routes/userRouter"); //local Module
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/rootPath");

const app = express();

const PORT = 3000;
app.use(express.urlencoded()); //Built-in Module
app.use(userRouter);
app.use(hostRouter);

app.use((req, res) => {
  res.sendFile(path.join(rootDir, "views", "404page.html"));
});

app.listen(PORT, () => {
  console.log(`Server start on port http://localhost:${PORT}`);
});
