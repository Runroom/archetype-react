import { gql } from 'apollo-boost';

const GET_LINKS = gql`
  query getLinks {
    relayLinks {
      edges {
        node {
          id
          url
          description
          votes {
            edges {
              node {
                id
                user {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_LINKS };
