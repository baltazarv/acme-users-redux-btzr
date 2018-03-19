import { createStore } from 'redux';

const reducer = (state = [], action) => {
  switch (action.type ) {
    case 'SET_USERS':
      state = action.users;
      break;
  }
  return state;
};

const store = createStore(reducer);

export default store;
