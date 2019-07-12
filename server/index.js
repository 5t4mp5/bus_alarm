const express = require('express');
const app = express();
const { dbSync, NjBus } = require('./db');
const router = require('./api/routes');

const PORT = process.env.PORT || 3000;

app.use('/api', router);

dbSync(false)
  .then(() => app.listen(PORT, () => console.log("I'm Listening...")))
  .catch(e => console.log(e));
