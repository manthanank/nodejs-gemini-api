const { generateResponse } = require("../services/generativeAIService");

const getAIResponse = async (prompt) => {
  try {
    return await generateResponse(prompt);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAIResponse };
