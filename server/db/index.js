const { db } = require('./db');
const { NjBus } = require('./models');

const dbSync = force => db.authenticate().then(() => db.sync({ force }));

module.exports = { dbSync, NjBus };
