const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const GoodReadsJS = require('./lib/goodreads/goodreadsJS.js');

require('dotenv').config();
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

// TODO - Hide these
const grApi = new GoodReadsJS(API_KEY, API_SECRET);

app.use(cors()).use(morgan('combined'));
app.get('/', async (req, res) => {
  try {
    let grRes = await grApi.showUser('cdnicoll');
    //console.log(grRes);
res.send(grRes);
  } catch (err) {
    console.log(err);
  }
  // grApi.showUser('cdnicoll').then(json => {
  //   console.log(json);
  // })
});
app.listen(process.env.PORT || 3001, function() {
  console.log('Express server listening on port %d', this.address().port);
});
