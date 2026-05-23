const express = require("express");
const Photo = require("../db/photoModel");
const path = require("path");
const router = express.Router();

const imageDirectory = path.join(__dirname, "..", "images");

router.post("/new", async (request, response) => {
    try {
        const uploadFile = request.files && request.files.photo;
        if (!uploadFile) {
            return response.status(400).send({message:"No file uploaded."});
        }

        const extension = path.extname(uploadFile.name);
        const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extension}`;
        
        await uploadFile.mv(path.join(imageDirectory, fileName));
        await Photo.create({
            file_name: fileName,
            date_time: new Date(),
            user_id: request.session.user._id,
            comments: [],
        });

        return response.status(200).send({message: "Photo uploaded successfully."});
    } catch (err) {
        return response.status(500).send({ message: "Internal Server Error", error: err });
    }
});

module.exports = router;