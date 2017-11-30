import { RECEIVE_ALL_USERS } from '../actions/task_form_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      const newState = merge({}, state, action.users);
      return newState;
    default:
      return state;
  }
}

export default usersReducer;
