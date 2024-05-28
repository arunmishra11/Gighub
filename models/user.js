const { Model, DataTypes } = require("sequelize");

const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => { // Grabs new password
        newUserData.password = await bcrypt.hash(newUserData.password, 10); //Encryptes new password and saves it
        return newUserData; // returns new password 
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash( // Grab new password when user updates password and encrypts it
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;

// below is not needed as only one model.exports is needed 

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
//   return User;
// };


// module.exports = User;