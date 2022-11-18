const express = require("express");
const {
  userLogin,
  userSignUp,
  protectedRoute,
  protectedAdminRoute,
} = require("../controller/user.controller");

// import middlewares
const roleBasedAccess = require("../middlewares/rbac");
const authenticateToken = require("../middlewares/auth");

const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userSignUp);

// Protect all routes after this middleware
router.get("/protect", authenticateToken, protectedRoute);

// Protect all routes - only accessible by admin
router.get(
  "/protected-admin",
  authenticateToken,
  roleBasedAccess(["admin"]),
  protectedAdminRoute
);
module.exports = router;
