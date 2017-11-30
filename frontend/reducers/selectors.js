import values from 'lodash/values';

export const selectAvailableTaskers = state => {
  const allTaskers = values(state.entities.users).filter(user => user.is_tasker);
  console.log(allTaskers, 'alltaskers');
  const availableTaskers = allTaskers.filter(tasker => {
    // console.log(tasker.unavailable_tasker_weekday, 'unavailable tasker weekday');
    // console.log(state.session.currentTask.selected_date, 'selected date');
    // //YYYY-MM-DD
    // console.log(state.session.currentTask.selected_date.split('-'), 'split selected date');
    let parts = state.session.currentTask.selected_date.split('-').map(part => parseInt(part));
    // console.log(parts, 'parts');
    let year, month, day;
    [year, month, day] = parts;
    // console.log(year, month, day, 'parts variables');
    let selected_date = new Date(year, month - 1, day);
    // console.log(selected_date);
    // console.log(selected_date.getDay(), 'selected weekday');
    return (
      tasker.tasker_tasks.every(task => JSON.stringify([task.time, task.date]) !== JSON.stringify([state.session.currentTask.selected_time, state.session.currentTask.selected_date])) &&
      (tasker.available_tasker_time === state.session.currentTask.selected_time || state.session.currentTask.selected_time === "I'm Flexible" ) &&
      tasker.unavailable_tasker_weekday !== selected_date.getDay() &&
      tasker.available_task_type === state.session.currentTask.selected_type
    )
  })
  console.log(availableTaskers, 'availabletaskers');
  return availableTaskers;
}
