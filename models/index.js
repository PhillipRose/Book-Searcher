// require all models
const Books_Read = require('./Book-Read')
const Read = require('./Want-to-Read')
const User = require('./User');
const Reviews = require('./Reviews')

module.exports = { User, Read, Books_Read, Reviews };
