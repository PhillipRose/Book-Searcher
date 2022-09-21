// Will need to reference the User id to keep track of what books that user has read.
// Will need to be able to tell if the user has already made a review about that book and not allow them to make more than 1 review per book.
const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Books_Read extends Model { }

Books_Read.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    review_id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
    },
    review: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }

})
Model.exports = Books_Read