const User = require('../models/User');
const { getWeatherData } = require('../utils/weather');

exports.createUser = async (req, res) => {
  try {
    const { email, location } = req.body;
    const user = new User({ email, location });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUserLocation = async (req, res) => {
  try {
    const { email, location } = req.body;
    const user = await User.findOneAndUpdate({ email }, { location }, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserWeatherData = async (req, res) => {
  try {
    const { email, date } = req.query;
    const user = await User.findOne({ email });
    const weatherData = user.weatherData.filter((data) => {
      return new Date(data.date).toDateString() === new Date(date).toDateString();
    });
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

