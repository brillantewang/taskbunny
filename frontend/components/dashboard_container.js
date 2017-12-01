import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { selectCurrentUserTasks } from '../reducers/selectors';
import { fetchAllTasks, deleteTask } from '../actions/task_form_actions';
// import { fetchAllUsers } from '../actions/task_form_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentUserTasks: selectCurrentUserTasks(state)
})

const mapDispatchToProps = state => ({
  fetchAllTasks: () => dispatch(fetchAllTasks()),
  deleteTask: taskId => dispatch(deleteTask(taskId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
