import values from 'lodash/values';

export const selectAvailableTaskers = state => {
  const allTaskers = values(state.entities.users).filter(user => user.is_tasker);
  console.log(allTaskers, 'alltaskers');
  const availableTaskers = allTaskers.filter(tasker => {
    return (
      tasker.tasker_tasks.every(task => JSON.stringify([task.time, task.date]) !== JSON.stringify([state.session.currentTask.selected_time, state.session.currentTask.selected_date])) &&
      tasker.available_tasker_time === state.session.currentTask.selected_time &&
      tasker.available_task_type === state.session.currentTask.selected_type
    )
  })
  console.log(availableTaskers, 'availabletaskers');
  return availableTaskers;
}
