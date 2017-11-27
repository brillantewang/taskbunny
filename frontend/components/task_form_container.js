import { connect } from 'react-redux';
import { createTask } from '../actions/task_form_actions';
import TaskForm from './task_form';

const mapStateToProps = state => ({
  errors: state.errors.task
})

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
