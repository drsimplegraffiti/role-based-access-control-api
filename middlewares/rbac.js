const roleBasedAccess = (roles) => {
  return function (req, res, next) {
    if (roles.includes(req.decoded.role)) {
      next();
    } else {
      res.json({ message: "Permission Denied" });
    }
  };
};

module.exports = roleBasedAccess;
