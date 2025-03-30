const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const authMiddleware = function (req, res, next) {
  // ... existing code ...
};

module.exports = { authMiddleware } 