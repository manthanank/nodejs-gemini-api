const swaggerJsdoc = require('swagger-jsdoc');
const { BASE_URL } = process.env;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js Gemini API',
      version: '1.0.0',
      description: 'A simple Node.js application that uses the Gemini API to generate text',
    },
    servers: [
      {
        url: BASE_URL || 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;