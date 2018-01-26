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

export default connect(
  mapStateToProps,
  null
)(PickTaskerForm);
