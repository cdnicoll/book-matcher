const axios = require('axios');
const xml2js = require('xml2js');
const OAuth = require('oauth');

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


  getoAuthResult(path) {
    return new Promise((resolve, reject) => {
      let oauth = new OAuth.OAuth(
        this.config.oauth_request_url,
        this.config.oauth_access_url,
        this.config.key,
        this.config.secret,
        this.config.oauth_version,
        this.config.callback,
        this.config.oauth_encryption,
      );
      oauth.get(
        path,
        this.oauthAccessToken,
        this.oauthAcessTokenSecret,
        (error, data, response) => {
          if (!error) {
            console.log(data);
            return parser.parseString(data);
          } else {
            reject(
              `Error getting OAuth request token : ${JSON.stringify(error)}`,
              500,
            );
          }
        },
      );
    });
  }
}

module.exports = Endpoint;
