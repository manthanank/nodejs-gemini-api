const { GoogleGenerativeAI } = require("@google/generative-ai");
const { API_KEY } = require("../config/apiConfig");

const genAI = new GoogleGenerativeAI(API_KEY);

const generateResponse = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    throw new Error(`Error generating content: ${error.message}`);
  }
};

module.exports = { generateResponse };
