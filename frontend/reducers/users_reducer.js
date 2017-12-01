import { RECEIVE_ALL_USERS } from '../actions/task_form_actions';
import { RECEIVE_USER } from '../actions/dashboard_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      newState = merge(newState, action.users);
      return newState;
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
}

export default usersReducer;
