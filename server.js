const cron = require('node-cron');
const User = require('./models/User');
const { getWeatherData } = require('./utils/weather');
const sendEmail = require('./utils/email');

cron.schedule('0 0 */3 * * *', async () => {
  const users = await User.find();
  for (const user of users) {
    const weatherData = await getWeatherData(user.location.lat, user.location.lon);
    user.weatherData.push({ date: new Date(), data: weatherData });
    await user.save();

    const weatherText = `Current weather at your location is: ${weatherData.weather[0].description}. Temperature is ${weatherData.main.temp}K.`;
    sendEmail(user.email, 'Hourly Weather Report', weatherText);
  }
});
