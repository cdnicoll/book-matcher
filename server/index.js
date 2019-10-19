require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
// api endpoints
const getLoggedInUser = require('./routes/getLoggedInUser');
const getShelf = require('./routes/getShelf');

app
.use(cors())
.use(morgan('combined'))
.use('/user', getLoggedInUser)
.use('/shelves', getShelf);

app.listen(process.env.PORT || 3001, function() {
  console.log('Express server listening on port %d', this.address().port);
});
