const sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  user_id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  email_id: {
    type: sequelize.STRING(30),
    unique: true,
    allowNull: false
  },

  password: {
    type: sequelize.STRING,
    allowNull: false
  },

  role: {
    type: sequelize.STRING,
    allowNull: false,
    defaultValue: 'user'
  },

  mobile_number: {
    type: sequelize.INTEGER,
    unique: true,
    allowNull: false
  },

  username: {
    type: sequelize.STRING(30),
    allowNull: false
  },

  address: {
    type: sequelize.STRING(30),
    allowNull: false
  },
  createdAt: {
    type: sequelize.DATE,
    allowNull: true
  },
  updatedAt: {
    type: sequelize.DATE,
    allowNull: true
  }
});

module.exports = User;
