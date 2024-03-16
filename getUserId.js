const jwt = require("jsonwebtoken");

const getUserId = (token) => {
  return jwt.verify(token, "thisistopsecret").id;
};

module.exports = getUserId;
