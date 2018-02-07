import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import UserBrowser from './features/UserBrowser/UserBrowser';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: { authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}` }
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <div className="container">
      <UserBrowser />
    </div>
  </ApolloProvider>,
  document.getElementById('root')
);
