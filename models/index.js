// require all models
const User = require('./User');
const Review = require('./Reviews');

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  User.hasMany(Review, {
    foreignKey: 'user_id'
  })



module.exports = { User, Review };

