import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, removeErrors } from '../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.login,
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
