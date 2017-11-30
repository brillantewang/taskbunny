import { connect } from 'react-redux';
import { selectAvailableTaskers } from '../reducers/selectors';
import PickTaskerForm from './pick_tasker_form';

const mapStateToProps = state => ({
  availableTaskers: selectAvailableTaskers(state)
})

export default connect(
  mapStateToProps,
  null
)(PickTaskerForm);
