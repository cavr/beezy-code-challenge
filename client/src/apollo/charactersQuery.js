import { gql } from 'apollo-boost';

export const GET_CHARACTERS_QUERY = gql`
  query getCharacters(
    $name: String
    $orderBy: String
    $nameStartsWith: String
    $modifiedSince: String
    $offset: Int
    $limit: Int
  ) {
    characters(
      name: $name
      orderBy: $orderBy
      nameStartsWith: $nameStartsWith
      modifiedSince: $modifiedSince
      offset: $offset
      limit: $limit
    ) {
      offset
      limit
      total
      results {
        id
        name
        description
        resourceURI
        thumbnail {
          value
        }      
      }
      count
    }
  }
`;
