require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
// api endpoints
const oauth = require('./routes/oauth');
const callback = require('./routes/callback');
const getLoggedInUser = require('./routes/getLoggedInUser');
const getShelf = require('./routes/getShelf');

app
  .use(cors())
  .use(morgan('combined'))
  .use(
    session({
      secret: 'reading is fun!',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    }),
  )
  .use('/oauth', oauth)
  .use('/callback', callback)
  .use('/user', getLoggedInUser)
  .use('/shelves', getShelf);

app.listen(process.env.PORT || 3001, function() {
  console.log('Express server listening on port %d', this.address().port);
});
