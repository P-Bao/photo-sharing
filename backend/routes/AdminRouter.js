const express = require("express");
const User = require("../db/userModel");
const router = express.Router();

router.post("/login", async (request, response) => {
  try {
    const { login_name, password } = request.body;
    if (!login_name || !password) {
      return response
        .status(400)
        .send({ message: "login_name and password are required." });
    }

    const user = await User.findOne({ login_name });
    if (!user || password !== user.password) {
      return response
        .status(400)
        .send({ message: "Invalid login_name or password." });
    }

    request.session.user = {
      _id: user._id,
      login_name: user.login_name,
      first_name: user.first_name,
      last_name: user.last_name,
    };
    return response.status(200).send(request.session.user);
  } catch (err) {
    return response
      .status(500)
      .send({ message: "Internal Server Error", error: err });
  }
});

router.post("/logout", (request, response) => {
  request.session.destroy((err) => {
    if (err) {
      return response
        .status(500)
        .send({ message: "Internal Server Error", error: err });
    } else {
      return response.status(200).send({ message: "Logged out." });
    }
  });
});

module.exports = router;
