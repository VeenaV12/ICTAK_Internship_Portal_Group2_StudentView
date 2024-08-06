const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Model/User');
const ExamResult = require('../Model/ExamResult');

exports.signup = async (req, res) => {
  const { name, email, phone, batch, password } = req.body;

  try {
    const examResult = await ExamResult.findOne({ email });

    if (!examResult || examResult.score < 30) {
      return res.status(400).json({ msg: 'You are not eligible to sign up' });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      phone,
      batch,
      password: hashedPassword,
      passed: true,
    });

    await newUser.save();

    //const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    if (newUser) {
      return res.status(201).json({
       message:'Registration successful!'
      });}
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const user = await User.findOne({ email });

    if (!user) {
      
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

   
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

   
    let dashboard;
    if (user.project) {
      dashboard = '/project'; // Navigate to project dashboard
    } else {
      dashboard = '/student'; // Navigate to student dashboard
    }

    // Send response with user ID, token, dashboard URL, and success message
    return res.status(200).json({
      _id: user._id,
      token,
      dashboard,
      message: "Login Successful"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};