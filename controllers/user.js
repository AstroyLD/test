const User = require("../models/user");
const PasswordReset = require("../models/forgotPassword");
const bycrpt = require("bcryptjs");
exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      status: false,
      message: "Please provide Email and Password",
    });
  }

  const response = await User.find({ email: email });

  if (response.length > 0) {
    return res.json({
      message: "The email is already used",
      status: false,
    });
  }

  let hashedPassword = await bycrpt.hash(password, 8);
  User.create({ email, hashedPassword }, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      return res.json({
        status: true,
        message: "User Registered",
      });
    }
  });
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        status: false,
        message: "Please Provide an Email and Password",
      });
    }

    const response = await User.find();

    if (
      !response ||
      !(await bycrpt.compare(password, response[0].hashedPassword))
    ) {
      res.json({
        status: false,
        message: "Email or Password is Incorrect!",
      });
    } else {
      res.json({
        status: true,
        message: "Success!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
