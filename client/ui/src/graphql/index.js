import { onError } from '@apollo/client/link/error';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

export const client = new ApolloClient({
  // https://www.apollographql.com/docs/react/api/link/apollo-link-error/#gatsby-focus-wrapper
  /// separates graphql errors from network errors and creates readable error messages
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(`GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'process.env.GRAPHQL_API'
    }),
  ]),
  // https://www.apollographql.com/docs/react/caching
  /// allows for caching of fetched data to avoid unnecessary network requests
  cache: new InMemoryCache({
    addTypename: false,
  }),
  // https://www.apollographql.com/docs/react/data/suspense/#rendering-partial-data
  /// renders cached data right away, then re-renders with full data when the query completes
  returnPartialData: true,
});