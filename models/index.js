// require all models
const User = require('./User');
const Review = require('./Reviews');

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });



module.exports = { User, Review };

