import selectedTaskTypeReducer from './selected_task_type_reducer';
import selectedTaskDateReducer from './selected_task_date_reducer';
import selectedTaskTimeReducer from './selected_task_time_reducer';
import { combineReducers } from 'redux';
import { RECEIVE_CURRENT_TASK } from '../actions/task_form_actions';

const currentTaskReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_TASK:
      return action.task;
    default:
      return state;
  }
}

export default currentTaskReducer;
