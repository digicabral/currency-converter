const {Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
 
class Rate extends Model {}

Rate.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    base: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brl: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    usd: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eur: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    jpy: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'rate'
})
 
module.exports = Rate;