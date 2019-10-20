const routes = require('express').Router();
const GoodReadsJS = require('../lib/goodreads/goodreadsJS.js');

const { API_KEY, API_SECRET } = process.env;
const grApi = new GoodReadsJS(API_KEY, API_SECRET);

routes.get('/', async (req, res) => {
  try {
    let grRes = await grApi.Auth.getAuthToken();
    console.log(grRes);

    //res.writeHead(302, { Location: grRes.url });
    return res.end();
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = routes;
