export const createTask = task => (
  $.ajax({
    url: "api/tasks",
    method: "POST",
    data: { task }
  })
)

export const fetchAllUsers = () => (
  $.ajax({
    url: "api/users",
    method: "GET"
  })
)
