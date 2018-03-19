import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import store from './store';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={ Users } />
        <Route exact path="/users/create" component={ CreateUser } />
        <Route path="/users/:id" component={ UpdateUser } />
      </div>
    </Router>
  );
};

const users = [
  { id: 1, name: 'Baltazar' },
  { id: 2, name: 'Melchior' },
  { id: 3, name: 'Gaspiar' }
];

store.dispatch({
    type: 'CREATE_USERS',
    users
  });

store.subscribe(() => {
  console.log(store.getState());
});

export default App;
