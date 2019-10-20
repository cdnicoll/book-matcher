const Endpoint = require('../Endpoint');

class Shelves extends Endpoint {
  constructor(config) {
    super(config);
  }

  /**
   * https://www.goodreads.com/api/index#reviews.list
   * Get the books on a members shelf. Customize the feed with the below variables. 
   * Viewing members with profiles who have set them as visible to members only or 
   * just their friends requires using OAuth.
   * 
   * @param {int} userId
   * @param {string} shelf
   * @param {string} sort
   * @param {string} search
   * @param {string} order
   * @param {int} perPage
   * @param {int} page
   */
  getUserShelves(userId, shelf='to-read', sort='title', order='a', perPage=20, page = 1, search='') {
    let path = `${this.config.endpoint}/review/list.xml?key=${this.config.API_KEY}&v=2&shelf=${shelf}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`;

    if (search !== '') {
        path+=`/&search=${search}`
    }

    return new Promise((resolve, reject) => {
      this.getoAuthResult(path)
        .then(res => {
          resolve(res.GoodreadsResponse);
        })
        .catch(err => reject(err));
    });
  }
}

module.exports = Shelves;
