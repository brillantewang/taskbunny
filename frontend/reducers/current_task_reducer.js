import selectedTaskTypeReducer from './selected_task_type_reducer';
import selectedTaskDateReducer from './selected_task_date_reducer';
import selectedTaskTimeReducer from './selected_task_time_reducer';
import { combineReducers } from 'redux';

const currentTaskReducer = combineReducers({
  selected_type: selectedTaskTypeReducer,
  selected_date: selectedTaskDateReducer,
  selected_time: selectedTaskTimeReducer
})

export default currentTaskReducer;
