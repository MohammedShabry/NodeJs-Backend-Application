const express = require('express');
const router = express.Router();
const {
  createUser,
  updateUserLocation,
  getUserWeatherData,
} = require('../controllers/userController');

router.post('/users', createUser);
router.put('/users', updateUserLocation);
router.get('/users/weather', getUserWeatherData);

module.exports = router;
