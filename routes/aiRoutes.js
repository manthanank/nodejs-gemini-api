const express = require("express");
const { getAIResponse } = require("../controllers/aiController");

const router = express.Router();

// POST route to generate AI response
router.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await getAIResponse(prompt);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
