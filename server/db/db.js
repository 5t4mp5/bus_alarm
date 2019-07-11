const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/bus_alarm');

module.exports = { db, Sequelize };
