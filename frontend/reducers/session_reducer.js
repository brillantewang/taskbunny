import { combineReducers } from 'redux';
import currentUserReducer from './current_user_reducer';
import currentTaskReducer from './current_task_reducer';

const sessionReducer = combineReducers({
  currentUser: currentUserReducer,
  currentTask: currentTaskReducer
})

export default sessionReducer;
