const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const authMiddlware = function (req, res, next) {
  
  const Authorization = req.headers.authorization;
  if (!Authorization || !Authorization.startsWith("Bearer ")) {
    console.log("unathorized")
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = Authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next()
  } catch (error) {
    console.log("error from jwt try catch block ", error)
    return res.status(403).json({});
  }
};

module.exports={authMiddlware}