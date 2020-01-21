const sequelize = require('sequelize');
const db = require('../config/database');

const Payment = db.define('payment', {
  payment_id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  payment_mode: {
    type: sequelize.STRING(10),
    allowNull: false
  },

  payment_status: {
    type: sequelize.STRING,
    allowNull: false,
    defaultValue: 'pending'
  },

  meals: {
    type: sequelize.STRING,
    allowNull: false
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

module.exports = Payment;
