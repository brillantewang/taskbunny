import { RECEIVE_LOCATION } from '../actions/task_form_actions';

const selectedLocationReducer = (state = "", action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LOCATION:
      return action.location;
    default:
      return state;
  }
}

export default selectedLocationReducer;
