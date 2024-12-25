const express = require("express");
require('dotenv').config();
const cors = require('cors')
const userRouter = require("./user");
const { authMiddlware } = require("./middlewares/authMiddlware");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


const articles = [
  {
    authorName: "Alice Johnson",
    publishDate: "2024-11-01",
    title: "Introduction to Node.js",
    content: "Node.js is a JavaScript runtime built on Chrome's V8 engine."
  },
  {
    authorName: "Bob Smith",
    publishDate: "2024-11-15",
    title: "Understanding REST APIs",
    content: "REST APIs use HTTP requests to access and manipulate data."
  },
  {
    authorName: "Charlie Brown",
    publishDate: "2024-12-01",
    title: "Future of AI",
    content: "AI is shaping the future of technology with machine learning and deep learning."
  },
  {
    authorName: "Diana Prince",
    publishDate: "2024-12-05",
    title: "A Guide to JSON",
    content: "JSON is a lightweight format for storing and transporting data."
  },
  {
    authorName: "Eve Torres",
    publishDate: "2024-12-10",
    title: "JavaScript Basics",
    content: "JavaScript is a versatile language used for both client-side and server-side development."
  },
  {
    authorName: "rahul raj",
    publishDate: "2024-12-05",
    title: "exam and code ",
    content: " hi my name is rahul raj an i am from school  of tumsar named shrinbai neterwala school JSON is a lightweight format for storing and transporting data."
  },
];
 
app.get("/api/articles",authMiddlware,(req, res) => {
  res.json({ articles });})

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
