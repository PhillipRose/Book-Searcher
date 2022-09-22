// Will need to be joined with the User table to show what books that user wants to read.
// They will need to have a unique Id for each item on the list to be moved when buttons are clicked.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Read extends Model { }

Read.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Want-to-Read',
    }
)
module.exports = Read;
