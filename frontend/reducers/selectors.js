import values from 'lodash/values';

export const selectAvailableTaskers = state => {
  const allTaskers = values(state.entities.users).filter(user => user.is_tasker);
  console.log(allTaskers, 'alltaskers');
  const availableTaskers = allTaskers.filter(tasker => {
    return (
      tasker.tasker_tasks.every(task => task.time !== state.session.currentTask.selected_time) &&
      tasker.tasker_tasks.every(task => task.date !== state.session.currentTask.selected_date) &&
      tasker.unavailable_tasker_times.every(time => time !== state.session.currentTask.selected_time) &&
      tasker.unavailable_task_types.every(type => type !== state.session.currentTask.selected_type)
    )
  })

  return availableTaskers;
}
