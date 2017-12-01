import * as dashboardAPIUtil from '../util/dashboard_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

//thunk action creators

export const getUser = userId => dispatch => (
  dashboardAPIUtil.getUser(userId)
    .then(user => dispatch(receiveUser(user)))
)
