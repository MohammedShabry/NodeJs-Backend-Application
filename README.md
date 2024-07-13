# Weather API Documentation
This project is a Node.js API that stores users’ emails and locations, and automatically sends hourly weather reports every 3 hours.

## Project Structure

The project structure is organized as follows:
weatherApp
├── config

│ └── db.js

├── controllers

│ └── userController.js

├── models

│ └── User.js

├── routes

│ └── userRoutes.js

├── utils

│ └── weather.js

├── app.js

└── server.js

## Set up environment variables:
PORT=
MONGODB_URI=
OPENWEATHERMAP_API_KEY=
GMAIL_USER=
GMAIL_PASS=

## API Endpoints

Users
POST /api/users: Create a new user with email and location.
PUT /api/users: Update a user's location.
GET /api/users/weather?email=user@example.com&date=2023-07-01: 


