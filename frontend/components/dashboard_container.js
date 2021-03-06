import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { selectCurrentUserTasks } from '../reducers/selectors';
import { fetchAllTasks, deleteTask, fetchAllUsers, createTask } from '../actions/task_form_actions';
import { getUser } from '../actions/dashboard_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentUserTasks: selectCurrentUserTasks(state),
  allUsers: state.entities.users
})

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: () => dispatch(fetchAllTasks()),
  deleteTask: taskId => dispatch(deleteTask(taskId)),
  getUser: userId => dispatch(getUser(userId)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  createTask: user => dispatch(createTask(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
