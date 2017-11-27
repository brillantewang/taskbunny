import { connect } from 'react-redux';
import { createTask } from '../actions/task_form_actions';
import TaskDetailsForm from 'task_details_form';

const mapStateToProps = state => ({
  errors: state.errors.task
})

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch()
})

export default connect({
  mapStateToProps,
  null
})
