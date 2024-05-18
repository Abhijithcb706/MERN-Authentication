const express = require("express");
const {
  registerUser,
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");
const router = express.Router();
const {protect} = require("../middlewares/authMiddleware");

router.post("/auth", authUser);
router.post("/registerUser", registerUser);

router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
