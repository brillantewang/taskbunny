import { connect } from 'react-redux';
import { createTask } from '../actions/task_form_actions';
import TaskForm from './task_form';
import { handleErrorInput } from '../util/errors_util.js';
import { removeErrors } from '../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.task
})

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)),
  removeErrors: () => dispatch(removeErrors()),
  // handleErrorInput: handleErrorInput
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
