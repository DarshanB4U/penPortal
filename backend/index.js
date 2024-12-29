const express = require("express");
require("dotenv").config();
const cors = require("cors");
const userRouter = require("./user");
const { authMiddlware } = require("./middlewares/authMiddlware");
const { getfeed } = require("./db");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get("/api/articles", authMiddlware, async (req, res) => {
  const data = await getfeed();

  const articles = data;
  res.json({ articles });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
