const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.OPENWEATHERMAP_API_KEY

const getWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

module.exports = { getWeatherData };
