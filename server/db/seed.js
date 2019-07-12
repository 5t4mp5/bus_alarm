const { dbSync, NjBus } = require('./index');
const fs = require('fs');

const busTable = fs
  .readFileSync('../data/nj_transit_bus/stops.txt', 'utf-8')
  .split('\n')
  .slice(1)
  .map(row => row.split(','));

dbSync(true)
  .then(() =>
    Promise.all(
      busTable.map(row => {
        if (row[1]) {
          NjBus.create({
            id: row[1],
            name: row[2],
            lat: row[4],
            lon: row[5],
          });
        }
      })
    )
  )
  .then(() => console.log('SEED COMPLETE'))
  .catch(e => console.error(e));
