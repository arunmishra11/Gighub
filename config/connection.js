const Sequelize = require('sequelize'); // Import sequelize
require('dotenv').config(); // Load environment variables from .env

let sequelize; // Declare a variable to hold Sequelize

// Check if the environment DB_URL is defined and if not, create it
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  const host = process.env.DB_HOST || 'localhost'
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: host,
      dialect: 'postgres'
    }
  );
}

module.exports = sequelize;
