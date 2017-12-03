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
