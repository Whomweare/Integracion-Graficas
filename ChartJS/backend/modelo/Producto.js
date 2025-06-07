

const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const Product = sequelize.define('products', {
    partNumber: {
        type: DataTypes.STRING
    },

    productType: {
        type: DataTypes.STRING
    },
    
    categoryCode: {
        type: DataTypes.STRING,
        field: 'category.code'
    },

    brandCode: {
        type: DataTypes.STRING,
        field: 'brand.code'
    },

    familyCode: {
        type: DataTypes.STRING,
        field: 'family.code'
    },

    lineCode: {
        type: DataTypes.STRING,
        field: 'line.code'
    },

    productSegmentCode: {
        type: DataTypes.STRING,
        field: 'productSegment.code'
    },

    status: {
        type: DataTypes.STRING,
    },

    value: {
        type: DataTypes.DECIMAL,
    },

    valueCurrency: {
        type: DataTypes.STRING,
    },
    defaultQuantityUnits: {
        type: DataTypes.STRING,
    },

    name: {
        type: DataTypes.STRING,
    },

    description: {
        type: DataTypes.STRING,
    },

    plannerCode: {
        type: DataTypes.STRING,
    },

    sourceLink: {
        type: DataTypes.STRING,
    },

}, {
    tableName: 'products',
    timestamps: false
});

module.exports = Product;