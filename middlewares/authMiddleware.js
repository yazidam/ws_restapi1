const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  // Bearer hrofgorhoizytighzoigreghozrpuifper_uifhuiozeryuohfiozrehfozeruifgzrihoerfhozih
  const token = req.headers.authorization?.split(" ")[1];
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const decoed = jwt.verify(token, process.env.JWT_SERCET);
      console.log("decoded", decoed);
      next();
    } catch (error) {
      res.status(404);
      throw new Error("not authorized no token");
    }
  }
  if (!token) console.log("no token");
};

module.exports = protect;
