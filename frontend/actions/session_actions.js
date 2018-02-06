import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const receiveSignupErrors = errors => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors
})

export const receiveLoginErrors = errors => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors
})

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

//thunk action creators

export const login = user => dispatch => (
  sessionAPIUtil.login(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveLoginErrors(errors.responseJSON))
    )
)

export const logout = () => dispatch => (
  sessionAPIUtil.logout()
    .then(res => dispatch(receiveCurrentUser(null)))
)

export const signup = user => dispatch => (
  sessionAPIUtil.signup(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveSignupErrors(errors.responseJSON))
    )
)
