import ConfirmTaskForm from './confirm_task_form';
import { connect } from 'react-redux';
import { selectAvailableTaskers } from '../reducers/selectors';
import { createTask } from '../actions/task_form_actions';

const mapStateToProps = state => ({
  availableTaskers: selectAvailableTaskers(state)
})

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmTaskForm);
