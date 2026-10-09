const { GoogleGenAI } = require("@google/genai");
const { API_KEY } = require("../config/apiConfig");

const genAI = new GoogleGenAI({ apiKey: API_KEY });

const generateResponse = async (prompt) => {
  try {
    const result = await genAI.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt,
    });
    return result.text;
  } catch (error) {
    throw new Error(`Error generating content: ${error.message}`);
  }
};

module.exports = { generateResponse };
