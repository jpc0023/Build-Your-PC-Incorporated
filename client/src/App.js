import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import CreateComputer from './pages/CreateComputer';
import Computer from './pages/Computers'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>

            <Nav />
            <Switch>
 
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/create" component={CreateComputer} />
              <Route exaxt path="/computer" component={Computer} />
  
            </Switch>
      
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
