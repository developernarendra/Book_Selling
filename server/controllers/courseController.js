const Course = require('../models/Course');
const User = require('../models/User');

const getAllCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

function hello(){
  console.log("Hello i am SHristi")
}
const purchaseCourse = async (req, res) => {
  const courseId = req.params.id;
  const user = await User.findById(req.user._id);
  if (!user.purchasedCourses.includes(courseId)) {
    user.purchasedCourses.push(courseId);
    await user.save();
  }
  res.status(200).json({ message: 'Course purchased successfully' });
};

module.exports = { getAllCourses, purchaseCourse };
