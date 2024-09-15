import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }

const response = await openai.images.generate({
  model: "dall-e-3",
  prompt: prompt,
  n: 1,
  size: "1024x1024",
});

    image_url = response.data[0].url;
    console.log(image_url);

    if (image_url) {
      res.status(200).json({ image: image_url });
    } else {
      res.status(500).json({ error: "Failed to generate image." });
    }
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).send("An error occurred.");
  }
});

export default router;
