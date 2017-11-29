import { connect } from 'react-redux';
import { TaskCategories } from './task_categories.jsx';
import { receiveTaskType } from '../actions/task_form_actions.js';

const mapStateToProps = (state, ownProps) => ({
  text: ownProps.text
})

const mapDispatchToProps = dispatch => ({
  setTaskType: taskType => dispatch(receiveTaskType(taskType))
})

export default connect(
  null,
  mapDispatchToProps
)(TaskCategories);
