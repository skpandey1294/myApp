const sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./User');
const Payment = require('./Payment');

const Order = db.define('order', {
  order_id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  user_id: {
    type: sequelize.INTEGER,
    allowNull: false
  },

  payment_id: {
    type: sequelize.INTEGER
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

Order.belongsTo(User, {
  foreignKey: { name: 'user_id' }
});

Order.belongsTo(Payment, {
  foreignKey: { name: 'payment_id' }
});

module.exports = Order;
