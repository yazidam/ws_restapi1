const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  authUser,
} = require("../controllers/UserController");
const { userValidator, validate } = require("../middlewares/validators");

const router = express.Router();

router.post("/add", userValidator, validate, createUser);
router.get("/all", getUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.post("/login", authUser);

module.exports = router;
