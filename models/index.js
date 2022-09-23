// require all models
const Books_Read = require('./Book-Read')
const Read = require('./Want-to-Read')
const User = require('./User');
const Reviews = require('./Reviews')

Reviews.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

User.hasMany(Reviews, {
    foreignKey: 'user_id',
})

module.exports = { User, Read, Books_Read, Reviews };
