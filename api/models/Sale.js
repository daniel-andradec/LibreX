const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Sale extends Model {}

Sale.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idVendedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', 
            key: 'id'
        }
    },
    idComprador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users', 
            key: 'id'
        }
    },
    idLivro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'books', 
            key: 'id'
        }
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Sale',
    tableName: 'sales',
    timestamps: false 
});

module.exports = Sale;
 