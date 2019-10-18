const axios = require('axios');
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

    axios.create({
      baseURL: this.config.endpoint,
    });
  }

    showUser(username) {
    //this.options.path = `${this.options.endpoint}/user/show.xml?key=${this.options.key}&username=${username}`;
    let path = `/user/show.xml?key=${this.config.API_KEY}&username=${username}`;
    const res = axios.get(path).then(res => {
        console.log(res);
    });
    
  }
}

module.exports = GoodReadsJS;
