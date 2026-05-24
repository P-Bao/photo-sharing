const express = require("express");
const Photo = require("../db/photoModel");
const router = express.Router();

router.post("/:photo_id", async (request, response) => {
  try {
    const { comment } = request.body;

    if (!comment || typeof comment !== "string" || !comment.trim()) {
      return response
        .status(400)
        .send({ message: "comment must be a non-empty string." });
    }

    const photo = await Photo.findById(request.params.photo_id);
    if (!photo) {
      return response.status(400).send({ message: "Photo not found." });
    }

    const new_comment = {
      comment: comment.trim(),
      date_time: new Date(),
      user_id: request.session.user._id,
    };
    photo.comments.push(new_comment);
    await photo.save();

    return response.status(200).send({ message: "Comment added." });
  } catch (err) {
    return response
      .status(500)
      .send({ message: "Internal Server Error", error: err });
  }
});

module.exports = router;
