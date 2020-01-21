const sequelize = require('sequelize');
const db = require('../config/database');
const Product = require('./Product');
const Order = require('./Order');

const OrderDetail = db.define('order_detail', {
  order_detail_id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  order_id: {
    type: sequelize.INTEGER,
    allowNull: false
  },

  product_id: {
    type: sequelize.INTEGER,
    allowNull: false
  },

  product_quantity: {
    type: sequelize.INTEGER,
    allowNull: false
  },

  price: {
    type: sequelize.FLOAT,
    allowNull: false
  },
  order_status: {
    type: sequelize.STRING,
    allowNull: false,
    defaultValue: 'pending'
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

OrderDetail.belongsTo(Order, {
  foreignKey: { name: 'order_id' }
});

OrderDetail.belongsTo(Product, {
  foreignKey: { name: 'product_id' }
});

module.exports = OrderDetail;
