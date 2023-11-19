const jwt = require("jsonwebtoken");

const authenticateToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return response.status(403).json({ message: "Unauthorized access" });
  }

  jwt.verify(token, "12345678", (error, user) => {
    if (error) {
      return response.status(403).json({ message: "Unauthorized access" });
    }

    request.user = user;
    next();
  });
};

module.exports = authenticateToken;
