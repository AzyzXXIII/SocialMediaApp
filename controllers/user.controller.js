const bcrypt = require("bcrypt");
const User = require("../models/users.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    console.log(req.body);

    // Hash the password from the request body
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create user data object
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword, // Use the hashed password
      bio: req.body.bio,
      birthDate: req.body.birthDate || new Date("2003-12-23"), // Use birthDate from request or default to a date
    };

    // Create a new user with the data
    const _user = new User(data);

    // Save the user to the database
    await _user.save();
    res.status(201).send("User Created Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body; // Destructure email and password from request body

  try {
    // Find the user by email
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "Email Not Found" });
    }

    // Compare the provided password with the hashed password in the database
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { data: { id: user.id, role: user.role } },
      process.env.KEY,
      {
        expiresIn: "1h",
      }
    );

    // Send success response with token and user data
    res
      .status(200)
      .json({ message: "Login Success", token: token, user: user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
