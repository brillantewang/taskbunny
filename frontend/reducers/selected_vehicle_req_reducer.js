import { RECEIVE_VEHICLE_REQ } from '../actions/task_form_actions';

const selectedVehicleReqReducer = (state = "Vehicle Not Needed", action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_VEHICLE_REQ:
      return action.vehicle_req;
    default:
      return state;
  }
}

export default selectedVehicleReqReducer;
