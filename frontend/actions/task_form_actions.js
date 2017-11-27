import * as taskFormAPIUtil from '../util/task_form_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
})

export const receiveTaskErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
})

//thunk action creators

export const createTask = task => dispatch => (
  taskFormAPIUtil.createTask(task)
    .then(
      taskRes => dispatch(receiveTask(taskRes)),
      errors => dispatch(receiveTaskErrors(errors))
    )
)
