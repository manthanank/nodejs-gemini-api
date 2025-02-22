# Node.js Gemini API

A Node.js REST API that integrates with Google's Gemini AI model for text generation.

## Features

- REST API endpoints for text generation using Gemini AI
- API documentation with Swagger UI
- Rate limiting and security middleware
- CORS support for frontend integration
- Environment configuration
- Error handling

## Prerequisites

- Node.js 14.x or higher
- npm or yarn
- Google AI API key

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/manthanank/nodejs-gemini-api.git
    cd nodejs-gemini-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create environment configuration:

    ```bash
    cp .env.example .env
    ```

4. Update .env with your configuration:

    ```env
    API_KEY=your_google_ai_api_key
    PORT=3000
    NODE_ENV=development
    BASE_URL=http://localhost:3000
    FRONTEND_URL=http://localhost:4200
    ```

## Running the Application

Development mode with hot reload:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The server will be running at <http://localhost:3000>

## API Documentation

Swagger UI documentation is available at: <http://localhost:3000/api-docs>

### API Endpoints

- POST /api/generate - Generate text using Gemini AI
- GET /health - Health check endpoint

## Security Features

- Rate limiting: 100 requests per 15 minutes
- CORS protection
- Helmet security headers
- Input validation
- Error handling middleware

## Environment Variables

- API_KEY: Google Generative AI API key
- PORT: Server port (default: 3000)
- NODE_ENV: Environment mode (development/production)
- BASE_URL: API base URL
- FRONTEND_URL: Frontend application URL for CORS

## License

This project is licensed under the MIT License.
