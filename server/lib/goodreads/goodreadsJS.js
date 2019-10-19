const axios = require('axios');
const xml2js = require('xml2js');
const Config = require('./config.js');

class GoodReadsJS {
  constructor(apiKey, apiSecret, options = {}) {
    options.API_KEY = apiKey;
    options.API_SECRET = apiSecret;
    this.config = new Config(options);

    if (
      typeof this.config.API_KEY === 'undefined' ||
      this.config.API_KEY === ''
    ) {
      throw new Error(
        'The apiKey is needed. Please pass it as parameter to the GoodReadsJS constructor.',
      );
    }

    if (
      typeof this.config.API_SECRET === 'undefined' ||
      this.config.API_SECRET === ''
    ) {
      throw new Error(
        'The apiSecret is needed. Please pass it as parameter to the GoodReadsJS constructor.',
      );
    }
  }

  showUser(username) {
    let path = `${this.config.endpoint}/user/show.xml?key=${this.config.API_KEY}&username=${username}`;

    return new Promise((resolve, reject) => {
      this.getResult(path)
        .then(res => {
          resolve(res.GoodreadsResponse);
        })
        .catch(err => reject(err));
    });
  }

  getResult(path) {
    return new Promise((resolve, reject) => {
      axios
        .get(path)
        .then(function(response) {
          let parser = new xml2js.Parser();
          parser
            .parseStringPromise(response.data)
            .then(function(result) {
              resolve(result);
            })
            .catch(function(err) {
              reject(err);
            });
        })
        .catch(function(err) {
          reject(err);
        });
    });
  }
}

module.exports = GoodReadsJS;
