const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  authUser,
  updateUser,
} = require("../controllers/UserController");
const protect = require("../middlewares/authMiddleware");
const { userValidator, validate } = require("../middlewares/validators");

const router = express.Router();

router.post("/add", userValidator, validate, createUser);
router.get("/all", protect, getUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.post("/login", authUser);
router.patch("/:id", updateUser);

module.exports = router;
