import { RECEIVE_TASK } from '../actions/task_form_actions';
import merge from 'lodash/merge';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK:
      let newState = merge({}, state);
      newState[action.task.id] = action.task;
      return newState;
    default:
      return state;
  }
}

export default tasksReducer;
