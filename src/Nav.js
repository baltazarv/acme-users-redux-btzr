import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Users</Link>
      </li>
      <li>
        <Link to="/users/create">Create User</Link>
      </li>
    </ul>
  );
};

export default Nav;
