'use strict';

const User = require("../models/User");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('books', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            titulo: {
                type: Sequelize.STRING,
                allowNull: false
            },
            autores: {
                type: Sequelize.STRING,
                allowNull: false
            },
            preco: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            foto: {
                type: Sequelize.STRING,
                allowNull: true
            },
            estadoConservacao: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    isIn: [[1, 2, 3]]  
                }
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            available: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            curso:{
                type: Sequelize.STRING,
                allowNull: false
            },
            disciplina: {
                type: Sequelize.STRING,
                allowNull: false
            },
            idVendedor: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users', 
                    key: 'id'
                }
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('books');
    }
};
