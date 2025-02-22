require("dotenv").config();

if (!process.env.API_KEY) {
  throw new Error('API_KEY environment variable is required');
}

module.exports = {
  API_KEY: process.env.API_KEY,
};
