import { connect } from 'react-redux';
import {
  createTask,
  updateTask,
  fetchLastTaskForCurrentUser,
  receiveTaskDate,
  receiveTaskTime,
  fetchAllUsers,
  fetchCurrentUser,
  receiveCurrentTask,
  fetchLastTaskInDB
} from '../actions/task_form_actions';
import TaskForm from './task_form';
import { handleErrorInput } from '../util/errors_util.js';
import { removeErrors } from '../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentTask: state.session.currentTask,
  errors: state.errors.task,
})

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)),
  updateTask: task => dispatch(updateTask(task)),
  removeErrors: () => dispatch(removeErrors()),
  setTaskDate: date => dispatch(receiveTaskDate(date)),
  setTaskTime: time => dispatch(receiveTaskTime(time)),
  dispatchCurrentTask: task => dispatch(receiveCurrentTask(task)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId)),
  fetchLastTaskForCurrentUser: taskId => dispatch(fetchLastTaskForCurrentUser(taskId)),
  fetchLastTaskInDB: () => dispatch(fetchLastTaskInDB())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
