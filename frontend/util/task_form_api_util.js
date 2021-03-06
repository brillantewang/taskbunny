export const createTask = task => (
  $.ajax({
    url: "api/tasks",
    method: "POST",
    data: { task }
  })
)

export const updateTask = task => (
  $.ajax({
    url: `api/tasks/${task.id}`,
    method: "PATCH",
    data: { task }
  })
)

export const fetchAllUsers = () => (
  $.ajax({
    url: "api/users",
    method: "GET"
  })
)

export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`,
    method: "GET"
  })
)

export const fetchAllTasks = () => (
  $.ajax({
    url: "api/tasks",
    method: "GET"
  })
)

export const deleteTask = taskId => (
  $.ajax({
    url: `api/tasks/${taskId}`,
    method: "DELETE"
  })
)

export const fetchLastTaskForCurrentUser = taskId => (
  $.ajax({
    url: `api/tasks/${taskId}`,
    method: "GET"
  })
)

export const fetchLastTaskInDB = () => (
  $.ajax({
    url: "api/last_task",
    method: "GET"
  })
)
