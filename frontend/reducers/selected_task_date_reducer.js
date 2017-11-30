import { RECEIVE_TASK_DATE } from '../actions/task_form_actions';
import todaysDateString from '../util/todays_date_util';

// const today = new Date();
// const day = today.getDate();
// const month = today.getMonth() +1;
// const year = today.getFullYear();

const selectedTaskDateReducer = (state = todaysDateString, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK_DATE:
      return action.task_date;
    default:
      return state;
  }
}

export default selectedTaskDateReducer;
