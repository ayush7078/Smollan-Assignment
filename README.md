# Backend for Sales Data API
This is the backend for the Sales Data API built with Node.js, Express, and Nodemon.

## Technologies Used:
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **Nodemon**: Tool for automatically restarting the server during development
- **CORS**: Middleware for handling Cross-Origin Resource Sharing

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   git clone https://github.com/ayush7078/Smollan-Assignment-backend.git
   cd Smollan-Assignment-backend


2. Install dependencies:
npm install

3. Set up the server:
Make sure to have a salesData.json file in the data folder with the necessary sales data.

4. Run the server in development mode with Nodemon:
npm run dev
The server will be running at http://localhost:5000.

# Endpoints
GET /api/sales
Fetch the sales data. Example response:
[
  { "product": "Product 1", "sales": 150, "revenue": 1200, "date": "2024-11-01" },
  { "product": "Product 2", "sales": 200, "revenue": 1500, "date": "2024-11-02" },
  ...
]

# Running in Production
- To run the app in production, use:
npm start
This will run the server without nodemon for production.

# License
MIT License. See the LICENSE file for details.