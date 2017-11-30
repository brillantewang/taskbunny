import { RECEIVE_TASK_DATE } from '../actions/task_form_actions';

const selectedTaskDateReducer = (state = "11/17/2017", action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK_DATE:
      return action.task_date;
    default:
      return state;
  }
}

export default selectedTaskDateReducer;
