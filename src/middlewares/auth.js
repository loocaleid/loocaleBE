const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const secretKey = process.env.SECRETKEY;

exports.auth = (request, res, next) => {
  try {
    const header = request.headers.authorization;
    let token = header && header.replace("Bearer ", "");

    if (!token) {
      return res.send({
        status: "Failed",
        message: "Access Denied, You Have to login first",
      });
    }

    const verified = jwt.verify(token, secretKey);
    request.userId = verified.id;
    request.headers.user_role = verified.user_role;

    next();
  } catch (error) {
    11(111, error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};
