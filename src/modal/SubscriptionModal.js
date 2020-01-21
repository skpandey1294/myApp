const sequelize = require('sequelize');
const db = require('../config/database');

const Subscription = db.define('subscription', {
  subs_id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  user_id: {
    type: sequelize.INTEGER,
    allowNull: false
  },

  product_id: {
    type: sequelize.INTEGER,
    allowNull: false
  },

  meals: {
    type: sequelize.STRING,
    allowNull: false
  },

  subs_status: {
    type: sequelize.BOOLEAN
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
Subscription.belongsTo(User, {
  foreignKey: { name: 'user_id' }
});

Subscription.belongsTo(Product, {
  foreignKey: { name: 'product_id' }
});
module.exports = Subscription;
