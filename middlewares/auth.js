const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const bearerToken = req.headers["authorization"];
  if (bearerToken) {
    if (bearerToken.startsWith("Bearer")) {
      token = bearerToken.split(" "); 
      token = token[1];
      req.token = token;

      jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
          return res.json({ message: "Invalid Token" });
        } else {
          // Add the data to req.decoded
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({ message: "Access Denied" });
    }
  } else {
    return res.json({ message: "Unauthorized" });
  }
};

module.exports = authenticateToken;
