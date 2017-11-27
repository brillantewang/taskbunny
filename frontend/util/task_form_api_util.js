export const createTask = task => (
  $.ajax({
    url: "api/tasks",
    method: "POST",
    data: { task }
  })
)
