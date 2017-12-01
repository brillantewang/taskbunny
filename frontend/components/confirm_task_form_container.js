import ConfirmTaskForm from './confirm_task_form';
import { connect } from 'react-redux';
import { selectAvailableTaskers } from '../reducers/selectors';

const mapStateToProps = state => ({
  availableTaskers: selectAvailableTaskers(state)
})

export default connect(
  mapStateToProps,
  null
)(ConfirmTaskForm);
