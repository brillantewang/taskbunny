import selectedTaskReducer from './selected_task_reducer';
import { combineReducers } from 'redux';

const currentTaskReducer = combineReducers({
  selected_task: selectedTaskReducer
})

export default currentTaskReducer;
