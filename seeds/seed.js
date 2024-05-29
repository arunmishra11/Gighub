const { User, Gig } = require('../models');
const sequelize = require('../config/connection');
const userData = require('./userData.json');
const gigData = require('./gigsData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Gig.bulkCreate(gigData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};

seedDatabase();
