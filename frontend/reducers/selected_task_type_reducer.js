import { RECEIVE_TASK_TYPE } from '../actions/task_form_actions';

const selectedTaskTypeReducer = (state = "Minor Repairs", action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASK_TYPE:
      return action.task_type;
    default:
      return state;
  }
}

export default selectedTaskTypeReducer;
