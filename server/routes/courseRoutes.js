const express = require('express');
const router = express.Router();
const { getAllCourses, purchaseCourse } = require('../controllers/courseController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getAllCourses);
router.post('/purchase/:id', protect, purchaseCourse);

module.exports = router;
