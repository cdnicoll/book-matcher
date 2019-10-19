const Endpoint = require ('../Endpoint');

class Shelves extends Endpoint {
  constructor(config) {
    super(config)
  }

  /**
   * https://www.goodreads.com/api/index#shelves.list
   * @param {int} userId
   * @param {int} page 1-N (default 1)
   */
  getUserShelves(userId, page=1) {
    let path = `${this.config.endpoint}/shelf/list.xml?key=${this.config.API_KEY}`;

    return new Promise((resolve, reject) => {
      this.getResult(path)
        .then(res => {
          resolve(res.GoodreadsResponse);
        })
        .catch(err => reject(err));
    });
  }
}

module.exports = Shelves;
