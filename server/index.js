const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
 app
  .use(cors())
  .use(morgan('combined'));
 app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(process.env.PORT || 3001, function() {
  console.log('Express server listening on port %d',
	this.address().port);
});