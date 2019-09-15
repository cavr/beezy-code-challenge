const CharactersRepository = require("../services/CharactersService");

const charactersRepository = new CharactersRepository();

module.exports = {
  Query: {
    characters(parent, filters) {
      return charactersRepository.findAll(filters);
    },
    character(parant, { id }) {
      return charactersRepository.findById(id);
    }
  },
  ImageUrl: {
    value({ path, extension }) {
      return `${path}.${extension}`;
    }
  }

};
