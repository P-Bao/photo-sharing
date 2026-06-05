const express = require("express");
const Photo = require("../db/photoModel");
const router = express.Router();

router.get("/:id", async (request, response) => {
  try {
    const photos = await Photo.find({ user_id: request.params.id })
      .select("_id user_id comments file_name date_time")
      .populate({
        path: "comments.user_id",
        model: "Users",
        select: "_id first_name last_name",
      });

    if (!photos) {
      return response.status(400).send({ message: "Error fetching photos" });
    }

    const transformedPhotos = photos.map((photo) => {
      const photoObj = photo.toJSON();
      if (photoObj.comments) {
        photoObj.comments = photoObj.comments.map((comment) => {
          const userObj = comment.user_id;
          return {
            _id: comment._id,
            comment: comment.comment,
            date_time: comment.date_time,
            user: userObj,
          };
        });
      }
      return photoObj;
    });

    response.status(200).send(transformedPhotos);
  } catch (err) {
    response
      .status(400)
      .send({ message: "Invalid User ID or other error", error: err });
  }
});

// router.get("/", async (request, response) => {});

module.exports = router;
