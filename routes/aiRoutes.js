const express = require("express");
const { getAIResponse } = require("../controllers/aiController");

const router = express.Router();

/**
 * @swagger
 * /api/generate:
 *   post:
 *     summary: Generate AI response
 *     description: Generate text using Google's Gemini AI model
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               prompt:
 *                 type: string
 *                 description: The prompt for text generation
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: string
 *       400:
 *         description: Bad request - Prompt is missing
 *       500:
 *         description: Internal server error
 */
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
