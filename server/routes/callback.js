const routes = require('express').Router();
const GoodReadsJS = require('../lib/goodreads/goodreadsJS.js');

const { API_KEY, API_SECRET } = process.env;
const grApi = new GoodReadsJS(API_KEY, API_SECRET);

routes.get('/', async (req, res) => {
  try {
    console.log(req.session)
    console.log(grApi.Auth.callback())
    res.status(200).json(grRes);
  } catch (err) {
    res.status(400).send(err.response.body);
  }
});

module.exports = routes;
