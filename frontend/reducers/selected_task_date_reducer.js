import { RECEIVE_TASK_DATE } from '../actions/task_form_actions';

const selectedTaskDateReducer = (state = "2017-11-17", action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK_DATE:
      return action.task_date;
    default:
      return state;
  }
}

export default selectedTaskDateReducer;
