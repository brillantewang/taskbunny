import { connect } from 'react-redux';
import { createTask, receiveTaskDate, receiveTaskTime } from '../actions/task_form_actions';
import TaskForm from './task_form';
import { handleErrorInput } from '../util/errors_util.js';
import { removeErrors } from '../actions/session_actions';
// import { availableTaskers } from '../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentTask: state.session.currentTask,
  errors: state.errors.task,
  // availableTaskers: availableTaskers(state)
})

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)),
  removeErrors: () => dispatch(removeErrors()),
  setTaskDate: date => dispatch(receiveTaskDate(date)),
  setTaskTime: time => dispatch(receiveTaskTime(time))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
