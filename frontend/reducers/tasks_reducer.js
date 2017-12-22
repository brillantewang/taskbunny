import { RECEIVE_TASK, RECEIVE_ALL_TASKS, REMOVE_TASK } from '../actions/task_form_actions';
import merge from 'lodash/merge';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_TASKS:
      console.log('state before merge', newState);
      newState = merge(newState, action.tasks);
      console.log('state after merge', newState);
      return newState;
    case RECEIVE_TASK:
    console.log(action, 'receive task action');
    console.log('state before task update', newState);
      newState[action.task.id] = action.task;
      console.log('state before task update', newState);
      return newState;
    case REMOVE_TASK:
      delete newState[action.task.id]
      return newState;
    default:
      return state;
  }
}

export default tasksReducer;
