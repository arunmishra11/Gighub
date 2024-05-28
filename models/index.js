
// Import models
const Gig = require('./gig');
const User = require('./user');


// Define model associations
User.hasMany(Gig, {
   foreignKey: 'userId',
  onDelete: 'CASCADE' 
});


Gig.belongsTo(User, {
   foreignKey: 'userId' });

module.exports = { User, Gig };
