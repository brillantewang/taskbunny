import selectedTaskTypeReducer from './selected_task_type_reducer';
import selectedTaskDateReducer from './selected_task_date_reducer';
import selectedTaskTimeReducer from './selected_task_time_reducer';
// import selectedTaskerIdReducer from './selected_tasker_id_reducer';
// import selectedLocationReducer from './selected_location_reducer';
// import selectedDescriptionReducer from './selected_description_reducer';
// import selectedVehicleReqReducer from './selected_vehicle_req_reducer';
import { combineReducers } from 'redux';

const currentTaskReducer = combineReducers({
  selected_type: selectedTaskTypeReducer,
  selected_date: selectedTaskDateReducer,
  selected_time: selectedTaskTimeReducer,
  // selected_tasker_id: selectedTaskerIdReducer,
  // selected_location: selectedLocationReducer,
  // selected_description: selectedDescriptionReducer,
  // selected_vehicle_req: selectedVehicleReqReducer,
})

export default currentTaskReducer;
