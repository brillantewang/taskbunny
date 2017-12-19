import { connect } from 'react-redux';
import { TaskCategories } from './task_categories.jsx';
import { receiveTaskType, createTask } from '../actions/task_form_actions.js';

const mapStateToProps = (state, ownProps) => ({
  text: ownProps.text,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  setTaskType: taskType => dispatch(receiveTaskType(taskType)),
  createTask: task => dispatch(createTask(task))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskCategories);
