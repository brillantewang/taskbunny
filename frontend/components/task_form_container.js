import { connect } from 'react-redux';
import {
  createTask,
  updateTask,
  fetchLastTaskForCurrentUser,
  receiveTaskDate,
  receiveTaskTime,
  // receiveTaskerId,
  // receiveDescription,
  // receiveLocation,
  // receiveVehicleReq,
  fetchAllUsers,
  fetchCurrentUser,
  receiveCurrentTask
} from '../actions/task_form_actions';
import TaskForm from './task_form';
import { handleErrorInput } from '../util/errors_util.js';
import { removeErrors } from '../actions/session_actions';
// import { selectAvailableTaskers } from '../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentTask: state.session.currentTask,
  errors: state.errors.task,
  // availableTaskers: selectAvailableTaskers(state)
})

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)),
  updateTask: task => dispatch(updateTask(task)),
  removeErrors: () => dispatch(removeErrors()),
  setTaskDate: date => dispatch(receiveTaskDate(date)),
  setTaskTime: time => dispatch(receiveTaskTime(time)),
  dispatchCurrentTask: task => dispatch(receiveCurrentTask(task)),
  // setTaskTaskerId: taskerId => dispatch(receiveTaskerId(taskerId)),
  // setTaskDescription: description => dispatch(receiveDescription(description)),
  // setTaskLocation: location => dispatch(receiveLocation(location)),
  // setTaskVehicleReq: vehicleReq => dispatch(receiveVehicleReq(vehicleReq)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
  fetchLastTaskForCurrentUser: taskId => dispatch(fetchLastTaskForCurrentUser(taskId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
