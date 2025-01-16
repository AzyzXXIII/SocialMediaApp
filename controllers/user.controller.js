const bcrypt = require("bcrypt");
const User = require("../models/users.model");

exports.signup = async (req, res) => {
  try {
    // Hash the hardcoded password
    const hashedPassword = await bcrypt.hash("123456", 10);

    // Hardcoded data
    const data = {
      firstName: "Azyz",
      lastName: "Hcini",
      email: "aziz@esen.tn",
      password: hashedPassword,
      bio: "I am a software engineer",
      picture: "",
      birthDate: new Date("2003-12-23"),
    };

    // Create a new user with the hardcoded data
    const _user = new User(data);

    // Save the user to the database
    await _user.save();
    res.status(201).send("User Created Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
