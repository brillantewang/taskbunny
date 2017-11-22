import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

//thunk

export const login = user => dispatch => (
  sessionAPIUtil.login(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors))
    )
)

export const logout = () => dispatch => (
  sessionAPIUtil.logout()
    .then(
      res => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receiveErrors(errors))
    )
)

export const signup = user => dispatch => (
  sessionAPIUtil.signup(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors))
    )
)
