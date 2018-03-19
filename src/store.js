import { createStore } from 'redux';

const reducer = (state = [], action) => {
  switch (action.type ) {
    case 'CREATE_USERS':
      state = action.users;
      break;
    case 'CREATE_USER':
      state = action.users;
      break;
    default:
      return;
  }
  return state;
};

const store = createStore(reducer);

export default store;
