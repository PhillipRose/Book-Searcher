const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model { }

Reviews.init({
    review_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    book_title: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    book_author: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    review_content: {
        type: DataTypes.STRING(4000),
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Reviews',
});
module.exports = Reviews;