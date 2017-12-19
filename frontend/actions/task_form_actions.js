import * as taskFormAPIUtil from '../util/task_form_api_util';
import { RECEIVE_CURRENT_USER, receiveCurrentUser } from './session_actions';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';
export const RECEIVE_TASK_TYPE = 'RECEIVE_TASK_TYPE';
export const RECEIVE_TASK_TIME = 'RECEIVE_TASK_TIME';
export const RECEIVE_TASK_DATE = 'RECEIVE_TASK_DATE';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_CURRENT_TASK = "RECEIVE_CURRENT_TASK";
// export const RECEIVE_TASKER_ID = 'RECEIVE_TASKER_ID';
// export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
// export const RECEIVE_DESCRIPTION = 'RECEIVE_DESCRIPTION';
// export const RECEIVE_VEHICLE_REQ = 'RECEIVE_VEHICLE_REQ';

export const removeTask = task => ({
  type: REMOVE_TASK,
  task
})

export const receiveAllTasks = tasks => ({
  type: RECEIVE_ALL_TASKS,
  tasks
})

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

export const receiveTaskTime = taskTime => ({
  type: RECEIVE_TASK_TIME,
  task_time: taskTime
})

export const receiveTaskDate = taskDate => ({
  type: RECEIVE_TASK_DATE,
  task_date: taskDate
})

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const receiveCurrentTask = task => ({
  type: RECEIVE_CURRENT_TASK,
  task
})

// export const receiveTaskerId = taskerId => ({
//   type: RECEIVE_TASKER_ID,
//   tasker_id: taskerId
// })
//
// export const receiveLocation = location => ({
//   type: RECEIVE_LOCATION,
//   location
// })
//
// export const receiveDescription = description => ({
//   type: RECEIVE_DESCRIPTION,
//   description
// })
//
// export const receiveVehicleReq = vehicleReq => ({
//   type: RECEIVE_VEHICLE_REQ,
//   vehicle_req: vehicleReq
// })

//thunk action creators

//why does this evaluate to the receiveTask action object?
export const createTask = task => dispatch => (
  taskFormAPIUtil.createTask(task)
    .then(
      taskRes => dispatch(receiveTask(taskRes)),
      errors => dispatch(receiveTaskErrors(errors.responseJSON))
    )
)

export const updateTask = task => dispatch => (
  taskFormAPIUtil.updateTask(task)
    .then(
      taskRes => dispatch(receiveTask(taskRes)),
      errors => dispatch(receiveTaskErrors(errors.responseJSON))
    )
)

export const fetchLastTaskForCurrentUser = taskId => dispatch => (
  taskFormAPIUtil.fetchLastTaskForCurrentUser(taskId)
    .then(
      taskRes => dispatch(receiveTask(taskRes)),
      errors => dispatch(receiveTaskErrors(errors.responseJSON))
    )
)

export const fetchAllUsers = task => dispatch => (
  taskFormAPIUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)))
)

export const fetchCurrentUser = userId => dispatch => (
  taskFormAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
)

export const fetchAllTasks = () => dispatch => (
  taskFormAPIUtil.fetchAllTasks()
    .then(tasks => dispatch(receiveAllTasks(tasks)))
)

export const deleteTask = taskId => dispatch => (
  taskFormAPIUtil.deleteTask(taskId)
    .then(task => dispatch(removeTask(task)))
)
