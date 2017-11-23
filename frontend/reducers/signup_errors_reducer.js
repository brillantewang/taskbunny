import { RECEIVE_SIGNUP_ERRORS, RECEIVE_CURRENT_USER, REMOVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const signupErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SIGNUP_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
}

export default signupErrorsReducer;
