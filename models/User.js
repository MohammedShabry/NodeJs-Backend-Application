const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  location: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
  },
  weatherData: [
    {
      date: { type: Date, required: true },
      data: { type: Object, required: true },
    },
  ],
});

module.exports = mongoose.model('User', UserSchema);
