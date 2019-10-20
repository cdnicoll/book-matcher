const deepmerge = require('deepmerge');

let goodreadsDefaultConfig = {
  host: 'www.goodreads.com',
  port: 80,
  // callback: config.callback || 'http://localhost:3001/callback',
  callback: 'http://localhost:3001/callback',
  method: 'GET',
  path: '',
  endpoint: 'https://www.goodreads.com',
  oauth_request_url: 'https://goodreads.com/oauth/request_token',
  oauth_access_url: 'https://goodreads.com/oauth/access_token',
  oauth_version: '1.0A',
  oauth_encryption: 'HMAC-SHA1',
};

class Config {
  constructor(optionsOverwrites) {
    this.defaults = goodreadsDefaultConfig;
    this.current = optionsOverwrites
      ? deepmerge(this.defaults, optionsOverwrites)
      : this.defaults;
    return this.current;
  }
}

module.exports = Config;
