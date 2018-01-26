import { connect } from 'react-redux';
import {
  selectAvailableTaskers,
  availableTaskersByHighestRating,
  availableTaskersByLowestPrice,
  availableTaskersByHighestPrice,
  availableTaskersByMostReviews,
  availableTaskersByMostTasks,
  availableTaskersByRecommended
} from '../reducers/selectors';
import { signup, removeErrors } from '../actions/session_actions';
import PickTaskerForm from './pick_tasker_form';

const mapStateToProps = state => ({
  availableTaskers: selectAvailableTaskers(state),
  availableTaskersByHighestRating: availableTaskersByHighestRating(state),
  availableTaskersByLowestPrice: availableTaskersByLowestPrice(state),
  availableTaskersByHighestPrice: availableTaskersByHighestPrice(state),
  availableTaskersByMostReviews: availableTaskersByMostReviews(state),
  availableTaskersByMostTasks: availableTaskersByMostTasks(state),
  availableTaskersByRecommended: availableTaskersByRecommended(state)
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickTaskerForm);
