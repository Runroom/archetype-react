import { withData } from 'next-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/',
  opts: {
    credentials: 'same-origin'
  }
});
const errorLink = onError(error => {
  console.log(error);
});
const link = errorLink.concat(httpLink);

const config = {
  link,
  cache: new InMemoryCache()
};

export default withData(config);
