import React from 'react';
import { Component } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Users from './Users';
import UserForm from './UserForm';
import store from './store';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={ Users } />
        <Route exact path="/create/user" component={ UserForm } />
      </div>
    </Router>
  );
};

const users = [
  { id: 1, name: 'moe' },
  { id: 1, name: 'larry' }
];

setTimeout(() => {
  store.dispatch({
    type: 'SET_USERS',
    users
  });
}, 3000);

store.subscribe(() => {
  console.log(store.getState());
});

export default App;
