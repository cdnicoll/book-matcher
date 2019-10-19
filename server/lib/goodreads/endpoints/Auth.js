const Endpoint = require ('../Endpoint');

class Auth extends Endpoint {
  constructor(config) {
    super(config)
  }

  /**
   * https://www.goodreads.com/api/index#auth.user
   */
  getAuthdUser() {
    let path = `${this.config.endpoint}/auth_user`

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
