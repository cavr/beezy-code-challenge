module.exports = `
    type Query {
      characters(name: String, orderBy: String,
       nameStartsWith: String, modifiedSince: String,
       offset: Int, limit: Int): CharacterList
      character(id: Int!): Character
    }

    type CharacterList {
      offset: Int
      limit: Int
      total: Int
      count: Int
      results: [Character]
    }

    type Character {
      id: ID
      name: String
      description: String
      resourceURI: String
      thumbnail: ImageUrl
      comics: ComicList
      urls: [Url]
    }

    type ImageUrl {
      value: String
    }

    type ComicList {
      items: [ComicSummary]
    }

    type ComicSummary {
      name: String
    }

    type Url{
      type: String,
      url: String
    }
`;
