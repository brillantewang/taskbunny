import { RECEIVE_TASK_TIME } from '../actions/task_form_actions';

const selectedTaskTimeReducer = (state = "11:00am", action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK_TIME:
      return action.task_time;
    default:
      return state;
  }
}

export default selectedTaskTimeReducer;
