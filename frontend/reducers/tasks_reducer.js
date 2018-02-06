import { RECEIVE_TASK, RECEIVE_ALL_TASKS, REMOVE_TASK } from '../actions/task_form_actions';
import merge from 'lodash/merge';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_TASKS:
      newState = merge(newState, action.tasks);
      return newState;
    case RECEIVE_TASK:
      newState[action.task.id] = action.task;
      return newState;
    case REMOVE_TASK:
      delete newState[action.task.id]
      return newState;
    default:
      return state;
  }
}

export default tasksReducer;
