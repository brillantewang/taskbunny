import { RECEIVE_TASKER_ID } from '../actions/task_form_actions';

const selectedTaskerIdReducer = (state = "", action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASKER_ID:
      return action.tasker_id;
    default:
      return state;
  }
}

export default selectedTaskerIdReducer;
