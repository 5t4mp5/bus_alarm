const { db } = require('./db');
const { NjBus } = require('./models');

const dbSync = () => db.authenticate().then(() => db.sync());

module.exports = { dbSync, NjBus };
