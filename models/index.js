// Import models
const Gig = require("./gig");
const User = require("./user");

// Define model associations
User.hasMany(Gig, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Gig.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Gig };
