import React, { Component } from 'react';
import store from './store';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: store.getState()
    }
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ users: store.getState()});
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>Users - { users.length }</h2>
        <ul>
          <li>users</li>
        </ul>
      </div>
    );
  }
}

export default Users;
