import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloClient, gql, InMemoryCache} from 'apollo-boost';
import {HttpLink} from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    link: new HttpLink({uri: 'http://177.193.106.68:3021/v1/graphql'}),
    cache: new InMemoryCache()
  });

const Main = () => (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
)

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
