const router = require('express').Router();
const { NjBus } = require('../db');

router.get('/stops', (req, res, next) => {
  NjBus.findAll()
    .then(stops => res.send(stops))
    .catch(e => console.error(e));
});

router.get('/stops/:id', (req, res, next) => {
  NjBus.scope('all')
    .findByPk(req.params.id)
    .then(stop => res.send(stop))
    .catch(e => console.error(e));
});

module.exports = router;
