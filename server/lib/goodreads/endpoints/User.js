const Endpoint = require ('../Endpoint');

class User extends Endpoint {
  constructor(config) {
    super(config)
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
}

module.exports = User;
