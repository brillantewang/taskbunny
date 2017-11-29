import * as taskFormAPIUtil from '../util/task_form_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';
export const RECEIVE_TASK_TYPE = 'RECEIVE_TASK_TYPE';

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
})

export const receiveTaskErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
})

export const receiveTaskType = taskType => ({
  type: RECEIVE_TASK_TYPE,
  task_type: taskType
})

//thunk action creators

export const createTask = task => dispatch => (
  taskFormAPIUtil.createTask(task)
    .then(
      taskRes => dispatch(receiveTask(taskRes)),
      errors => {
        console.log(errors);
        dispatch(receiveTaskErrors(errors.responseJSON))
      }
    )
)
