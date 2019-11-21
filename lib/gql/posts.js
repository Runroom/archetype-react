import { gql } from 'apollo-boost';

const GET_POSTS = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`;

const CREATE_POST = gql`
  mutation createPost($title: String!, $url: String!) {
    createPost(title: $title, url: $url) {
      id
      title
      votes
      url
      createdAt
    }
  }
`;

const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $votes: Int) {
    updatePost(id: $id, votes: $votes) {
      __typename
      id
      votes
    }
  }
`;

export { CREATE_POST, GET_POSTS, UPDATE_POST };
