const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '212005', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
