const sequelize = require('../config/connection');
const { User, Reviews } = require('../models/index');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('seed function is hitting');

  await User.bulkCreate(userData);
  await Reviews.bulkCreate(reviewData);

  process.exit(0);
};

seedDatabase();