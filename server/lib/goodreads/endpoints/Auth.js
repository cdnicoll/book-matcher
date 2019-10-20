const OAuth = require('oauth').OAuth;
const Endpoint = require('../Endpoint');

class Auth extends Endpoint {
  constructor(config) {
    super(config);
  }


  // OLD CODE
  /*
  getAuthToken() {
    return new Promise((resolve, reject) => {
      console.log('getting auth token...');
      let oa = new oauth(
        this.config.oauth_request_url,
        this.config.oauth_access_url,
        this.config.key,
        this.config.secret,
        this.config.oauth_version,
        this.config.callback,
        this.config.oauth_encryption,
      );
      oa.getOAuthRequestToken((error, token, secret, result) => {
        if (error) {
          console.log(error);
          reject(
            `Error getting OAuth request token : ${JSON.stringify(error)}`,
            500,
          );
        }
        let url = `https://goodreads.com/oauth/authorize?oauth_token=${token}&oauth_callback=${oa._authorize_callback}`;
        console.log(url);
        resolve({ token, secret, url });
      });
    });
  }

  callback(token, secret, authorize) {
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
      oauth.getOAuthAccessToken(
        oauthToken,
        oauthTokenSecret,
        authorize,
        (error, oauthAccessToken, oauthAccessTokenSecret, results) => {
          if (error) {
            reject('Error getting OAuth access token', 500);
          } else {
            oauth.get(
              'http://www.goodreads.com/api/auth_user',
              oauthAccessToken,
              oauthAccessTokenSecret,
              (error, data, response) => {
                if (error) {
                  reject('Error getting User ID', 500);
                } else {
                  console.log('@DEBUG::10192019-044450');
                  console.log(data);
                  return parser.parseString(data);
                }
              },
            );
          }
        },
      );
    });
  }
  */

  /**
   * https://www.goodreads.com/api/index#auth.user
   */
  getAuthdUser() {
    let path = `${this.config.endpoint}/auth_user`;

    return new Promise((resolve, reject) => {
      this.getResult(path)
        .then(res => {
          resolve(res.GoodreadsResponse);
        })
        .catch(err => reject(err));
    });
  }
}

module.exports = Auth;
