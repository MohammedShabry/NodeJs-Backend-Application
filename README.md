# Weather API Documentation
This project is a Node.js API that stores users’ emails and locations, and automatically sends hourly weather reports every 3 hours.

## Project Structure

The project structure is organized as follows:
weatherApp
├── config<br>
│ └── db.js<br>
├── controllers<br>
│ └── userController.js<br>
├── models<br>
│ └── User.js<br>
├── routes<br>
│ └── userRoutes.js<br>
├── utils<br>
│ └── weather.js<br>
├── app.js<br>
└── server.js<br>

## Set up environment variables:
PORT= <br>
MONGODB_URI=<br>
OPENWEATHERMAP_API_KEY=<br>
GMAIL_USER=<br>
GMAIL_PASS=<br>

## API Endpoints

Users<br>
POST /api/users: Create a new user with email and location.<br>
PUT /api/users: Update a user's location.<br>
GET /api/users/weather?email=user@example.com&date=2023-07-01:<br>
 
