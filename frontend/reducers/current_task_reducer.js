import selectedTaskTypeReducer from './selected_task_type_reducer';
import { combineReducers } from 'redux';

const currentTaskReducer = combineReducers({
  selected_task_type: selectedTaskTypeReducer
})

export default currentTaskReducer;
