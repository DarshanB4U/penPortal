// db.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function findUser(email, password) {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
      password: password,
    },
  });

  return user;
}

// returns all artilces
async function getfeed() {
  const feed = await prisma.articles.findMany({
    include: {
      author: {
        select: {
          name: true, // Fetch only the author's name
        },
      },
    },
  });
  return feed;
}

// function to check if user already exists
async function checkuser(email) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user) {
    return true;
  }
  return false;
}


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
  try {
    const article = await prisma.articles.create({
      data: {
        descreption,
        body,
        authorId,
      },
    });
    console.log("Article created msg from db file:", article);
    return article;
  } catch (error) {
    console.log("error while creating article ", error);
  }
};

const deleteArticle = async (authorId, articleId) => {
  authorId = parseInt(authorId, 10);
  try {
    const deletedArticle = prisma.articles.deleteMany({
      where: {
        AND: [
          { id: articleId }, // Condition 1
          { authorId: authorId }, // Condition 2
        ],
      },
    });
    console.log("Article Deleted --msg from db file:", deletedArticle);
    return deletedArticle;
  } catch (error) {
    console.log("error while deleting article ", error);
  }
};

// exporting  functions with database connectivity
module.exports = {
  createUser,
  checkuser,
  createArticle,
  findUser,
  deleteArticle,
  getfeed,
};
