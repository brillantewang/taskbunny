import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

export default connect(
  mapStateToProps,
  null
)(Dashboard);
