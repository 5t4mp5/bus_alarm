const express = require('express');
const app = express();
const { dbSync, NjBus } = require('./db');

const PORT = process.env.PORT || 3000;

dbSync().then(() => app.listen(PORT, () => console.log("I'm Listening...")));
