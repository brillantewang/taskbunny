import { connect } from 'react-redux';
import { createTask } from '../actions/task_form_actions';
import TaskForm from './task_form';
import { handleErrorInput } from '../util/errors_util.js';

const mapStateToProps = state => ({
  errors: state.errors.task
})

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)),
  // handleErrorInput: handleErrorInput
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
