import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../mongoDb/models/posts.model.js";

dotenv.config();
const router = express.Router();

cloudinary.config({
  cloud_name: "dxbzkp3nt",
  api_key: "441969433678154",
  api_secret: "3LZXlemc6CIz6JPVli5llbT9d7I",
});

// GET route to retrieve all posts
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res
      .status(200)
      .json({ success: true, message: "All posts are here", posts });
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "Error while getting posts" });
  }
});

// POST route to create a new post
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    console.log("hanji");

    if (!name || !prompt || !photo) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    console.log("photoUrl");
    const photoUrl = await cloudinary.uploader.upload(photo, {
      resourse_type: "auto",
    });
    console.log(photoUrl);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    newPost.save();

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: newPost,
    });
  } catch (error) {
    console.error("Error in POST /api/v1/post:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
