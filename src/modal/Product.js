const sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', {
  product_id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  product_name: {
    type: sequelize.STRING,
    allowNull: true
  },
  price: {
    type: sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: sequelize.STRING(500),
    allowNull: false
  },
  image_url: {
    type: sequelize.STRING,
    allowNull: false
  },
  calories: {
    type: sequelize.STRING
  },
  nutrition_level: {
    type: sequelize.STRING
  },
  type: {
    type: sequelize.STRING,
    defaultValue: 'not specified' //(veg/non-veg)
  },
  category: {
    type: sequelize.STRING,
    allowNull: true
  },
  createdAt: {
    type: sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: sequelize.DATE,
    allowNull: false
  }
});

module.exports = Product;
