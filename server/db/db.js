const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/bus_alarm', { logging: false });

module.exports = { db, Sequelize };
