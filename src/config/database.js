const Sequelize = require('sequelize');

module.exports = new Sequelize('eatfit', 'postgres', 'test123', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false

  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
});

// const sequelize = new Sequelize(
//   'postgres://postgres:test12345@database-1.cedd1krv9sw4.us-east-2.rds.amazonaws.com:5432/postgres'
// );

// module.exports = sequelize;
