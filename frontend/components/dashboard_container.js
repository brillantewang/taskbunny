import { connect } from 'react-redux';
import Dashboard from './dashboard';
// import { fetchAllUsers } from '../actions/task_form_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

// const mapDispatchToProps = state => ({
//   fetchAllUsers: () => dispatch(fetchAllUsers())
// })

export default connect(
  mapStateToProps,
  null
)(Dashboard);
