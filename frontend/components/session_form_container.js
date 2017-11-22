import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.location.pathname === "/login" ? 'login' : 'signup';
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let submit = ownProps.location.pathname === "/login" ? login : signup;
  return {
    processForm: user => dispatch(submit(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
