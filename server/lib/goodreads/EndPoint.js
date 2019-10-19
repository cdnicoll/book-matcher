const axios = require('axios');
const xml2js = require('xml2js');

class Endpoint {
  constructor(config) {
    this.config = config;
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

module.exports = Endpoint;
