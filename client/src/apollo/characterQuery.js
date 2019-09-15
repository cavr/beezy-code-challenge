import { gql } from 'apollo-boost';

export const GET_CHARACTER_QUERY = gql`
  query getCharacter($id: Int!) {
    character(id: $id) {
      id
      name
      description
      resourceURI
      urls {
        url
        type
      }
      thumbnail {
        value
      },
      comics {
          items {
            name
          }
        }
    }
  }
`;
