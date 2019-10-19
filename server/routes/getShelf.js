const routes = require('express').Router();
const GoodReadsJS = require('../lib/goodreads/goodreadsJS.js');

const { API_KEY, API_SECRET } = process.env;
const grApi = new GoodReadsJS(API_KEY, API_SECRET);


/**
 * Gets a user shelf
 * @param { int } userId
 * @param { String } shelf
 */
routes.get('/:userId/:shelf', async (req, res) => {
  try {
    let grRes = await grApi.Reviews.getUserShelves(req.params.userId, req.params.shelf);
    res.status(200).json(grRes);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.response.body);
  }
});

module.exports = routes;
