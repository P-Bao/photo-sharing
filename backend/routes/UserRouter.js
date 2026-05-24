const express = require("express");
const User = require("../db/userModel");
const router = express.Router();

router.post("/", async (request, response) => {
  try {
    const {
      login_name,
      password,
      first_name,
      last_name,
      location,
      description,
      occupation,
    } = request.body;

    const requiredFields = {
      login_name,
      password,
      first_name,
      last_name,
    };
    for (const [fieldName, value] of Object.entries(requiredFields)) {
      if (!value || typeof value !== "string" || !value.trim()) {
        return response.status(400).send(`${fieldName} is required`);
      }
    }

    const existingUser = await User.findOne({ login_name: login_name.trim() });
    if (existingUser) {
      return response
        .status(400)
        .send({ message: "login_name already exists." });
    }

    const new_user = await User.create({
      login_name: login_name.trim(),
      password,
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      location,
      description,
      occupation,
    });

    return response.status(200).send({
      message: "User registered successfully",
      login_name: new_user.login_name,
    });
  } catch (err) {
    return response
      .status(500)
      .send({ message: "Internal Server Error", error: err });
  }
});

router.get("/list", async (request, response) => {
  try {
    const users = await User.find({}, "_id first_name last_name");
    response.status(200).send(users);
  } catch (err) {
    response.status(500).send({ message: "Internal Server Error", error: err });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const user = await User.findById(
      request.params.id,
      "_id first_name last_name location description occupation"
    );
    if (!user) {
      return response.status(400).send({ message: "User not found" });
    }
    response.status(200).send(user);
  } catch (err) {
    response.status(400).send({
      message: `Error get user with id: ${request.params.id}`,
      error: err,
    });
  }
});

module.exports = router;
