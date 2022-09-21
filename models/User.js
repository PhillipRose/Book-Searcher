// User will have reviews, completed books and Want to Read books.
// User will need id primary key, a list of read books, a list of To Read Books, a list of reviews created by them.
//  TODO: set up the table logic
//  TODO: set up the references to the completed books list
//  TODO: set up the references to the want to read books list
//  TODO: set up the references to the reviews list


const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
  {
    // used by other tables to reference the user.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // this will act as the list of books the user has read and will link with the reviews table.
    books_completed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // This is the user reading list, and will join with the want-to-read table.
    books_to_read: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    // this is a number to prevent multiple reviews from the same user
    review_id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
    },
    // This is the displayed name for the User.
    nickname: {
      type: DataTypes.VARCHAR(40),
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;