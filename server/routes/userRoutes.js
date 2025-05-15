const express = require("express");
const { signup, getPurchasedCourses, signin } = require("../controllers/userController");
const router = express.Router();

const {protect} = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", signin);
router.post("/purchased",protect,getPurchasedCourses);

module.exports = router;
