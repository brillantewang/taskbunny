// import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
// import merge from 'lodash/merge';
//
// const defaultState = {
//   currentUser: null,
// }
//
// const sessionReducer = (state = defaultState, action) => {
//   Object.freeze(state);
//   let newState = merge({}, state);
//
//   switch(action.type) {
//     case RECEIVE_CURRENT_USER:
//       newState['currentUser'] = action.user;
//       return newState;
//     default:
//       return state;
//   }
// }
//
// export default sessionReducer;

import { combineReducers } from 'redux';
import currentUserReducer from './current_user_reducer';
import currentTaskReducer from './current_task_reducer';

const sessionReducer = combineReducers({
  currentUser: currentUserReducer,
  currentTask: currentTaskReducer
})

export default sessionReducer;
