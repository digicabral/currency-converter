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
    origin_currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    origin_value:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    target_currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    conversion_rate:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    user_id:{
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