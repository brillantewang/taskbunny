import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
}

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      console.log(newState);
      newState['currentUser'] = action.user;
      console.log(newState);
      return newState;
    default:
      return state;
  }
}

export default sessionReducer;
