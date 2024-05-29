const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gig extends Model {}

Gig.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    technologies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    budget: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    }, user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'gig',
  }
);

module.exports = Gig;
