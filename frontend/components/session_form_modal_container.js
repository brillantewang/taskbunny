import { signup, login, removeErrors } from '../actions/session_actions';
import { connect } from 'react-redux';
import SessionFormModal from './session_form_modal';

const mapStateToProps = state => ({
  errors: state.errors.signup,
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionFormModal);
