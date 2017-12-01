import { RECEIVE_DESCRIPTION } from '../actions/task_form_actions';

const selectedDescriptionReducer = (state = "", action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DESCRIPTION:
      return action.description;
    default:
      return state;
  }
}

export default selectedDescriptionReducer;
