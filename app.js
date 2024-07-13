const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./Routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
  console.error('Database connection failed:', error);
  process.exit(1); // Exit the process with failure
});
