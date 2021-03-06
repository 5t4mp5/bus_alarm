const { db, Sequelize } = require('../../db');

const NjBus = db.define(
  'njBus',
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lon: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['lat', 'lon', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      all: {
        attributes: {},
      },
    },
  }
);

module.exports = NjBus;
