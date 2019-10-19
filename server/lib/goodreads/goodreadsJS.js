const Config = require('./config.js');
// endoints
const User = require('./endpoints/User');

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

    this.User = new User(this.config);
  }
}

module.exports = GoodReadsJS;
