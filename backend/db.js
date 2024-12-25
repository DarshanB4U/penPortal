// db.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function findUser(email,password) {
  const user = await prisma.user.findFirst({
    where:{
      email:email,
      password:password
    },
  })

  return user
  
}


// function to check if user already exists
async function checkuser(email) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
    if (user){
      return true
    }
  return false
}
// async function darshan() {
//   const darshan = await checkuser("darshanbondre0@gmail.com");
//   console.log(darshan);
// }
// darshan();

// function to create new user
const createUser = async (name, email, password) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  console.log("User created msg from db file:", user);
  return user;
};









const createArticle = async (descreption, body, authorId) => {
  const article = await prisma.articles.create({
    data: {
      descreption,
      body,
      authorId,
    },
  });
  console.log("Article created msg from db file:", article);
  return article;
};

// exporting  functions with database connectivity
module.exports = { createUser, checkuser, createArticle,findUser };
