const express = require("express");
const router = express.Router();
const zod = require("zod");
const { createUser, checkuser, findUser, createArticle, deleteArticle } = require("./db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
const { authMiddlware } = require("./middlewares/authMiddlware");

/// signup body
const signupbody = zod.object({
  email: zod.string().email(),
  name: zod.string(),
  password: zod.string(),
});

// signup route
router.post("/signup", async (req, res) => {
  const { success } = signupbody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "incorrect inputs",
    });
  }
  const uE = await checkuser(req.body.email);

  if (uE) {
    console.log("user already exist");
    return res.status(411).json({ message: "user already exist" });
  }

  try {
    const createdUser = await createUser(
      req.body.name,
      req.body.email,
      req.body.password
    ); // Await the promise

    const payload = {
      userId: createdUser.id,
      email: createdUser.email,
    };
    console.log(payload);
    const token = jwt.sign(payload, JWT_SECRET);
    console.log(token);

    res
      .status(201)
      .json({ message: "User created successfully", token: token }); // Send success response
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create user", error: error.message });
  }
});

// signin body
const signinbody = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

// signin route
router.post("/signin", async (req, res) => {
  const { success } = signinbody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "incorrect inputs",
    });
  }
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);

  try {
    const user = await findUser(email, password);
    console.log(user);

    const payload = {
      userId: user.id,
      email: user.email,
    };

    const token = jwt.sign(payload, JWT_SECRET);

    return res
      .status(201)
      .json({ message: "User logged in successfully", token: token }); // Send success response
  } catch (e) {
    return res
      .status(500)
      .json({ message: "user not found or unable to login" });
  }
});

//article creation route
router.post("/createArticle", authMiddlware, async (req, res) => {
  const descreption = req.body.descreption;
  const body = req.body.content;
  const authorId = req.userId;
  const article = await createArticle(descreption, body, authorId);
  console.log(article);
  

  res.send("article created ");
});

router.delete("/deleteArticle", authMiddlware, async (req, res) => {
  const articleId = req.body.articleId;
  console.log(articleId);
  
  let authorId = req.userId;
  console.log(authorId);
  
  try{
    const response = await deleteArticle(authorId,articleId)
    console.log(response);
   return res.status(200).json({message:"post deleted"})
  }
  catch(error){
    console.log(error)
    return res.status(409).json({message:"error"})


  }
});

module.exports = router;
