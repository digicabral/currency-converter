const {Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user');
 
class Convert extends Model {}

Convert.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    originCurrency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    originValue:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    targetCurrency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    targetValue:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    conversionRate:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        references:{ 
            model: User,
            key: 'id'
        }
    }
    
},{
    sequelize,
    modelName: 'conversion'
})
 
module.exports = Convert;