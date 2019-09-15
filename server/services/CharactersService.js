const api = require("../api.config");

class CharactersRepository {
  constructor() {
    this.path = 'characters';
  }
  async findAll(filters = {}) {
    try {
      const searchResults = await api.get(this.path, {
        params: { ...filters }
      });

      return searchResults.data.data;
    } catch (error) {
      console.error(error);
    }

  }
  async findById(id) {
    try {
      const result = await api.get(`${this.path}/${id}`);

      return result.data.data.results[0];

    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CharactersRepository;
