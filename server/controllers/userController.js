const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
    const {name, email, password}  = req.body;
    const exists =await User.findOne({email});
    if(exists) return res.status(400).json({message: 'User already exists'});

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({name, email, password:hashed});

    const token = jwt.sign({ id:user._id}, process.env.JWT_SECRET);
    res.status(201).json({ token });
}

const signin = async (req, res) => {
    const {name,email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).json({ message: 'Invalid credentials'});
    }

    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
    res.status(200).json({ token });
};

const getPurchasedCourses = async (req, res) =>{
    const user = await User.findById(req.user._id).populate('purchasedCourses');
    res.json(user.purchasedCourses);
}
 
module.exports = { signup, signin, getPurchasedCourses };