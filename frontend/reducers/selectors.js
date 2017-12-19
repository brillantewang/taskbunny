import values from 'lodash/values';

export const selectAvailableTaskers = state => {
  const allTaskers = values(state.entities.users).filter(user => user.is_tasker);
  // console.log(allTaskers, 'alltaskers');

  const availableTaskers = allTaskers.filter(tasker => {
    let parts = state.session.currentTask.date.split('-').map(part => parseInt(part));
    let year, month, day;
    [year, month, day] = parts;
    let date = new Date(year, month - 1, day);
    // console.log(tasker, 'tasker in selector');
    // console.log(tasker.tasker_tasks, 'tasker tasks in selector');

    return (
      tasker.tasker_tasks.every(task => JSON.stringify([task.time, task.date]) !== JSON.stringify([state.session.currentTask.task_time, state.session.currentTask.date])) &&
      (tasker.available_tasker_time === state.session.currentTask.task_time || state.session.currentTask.task_time === "I'm Flexible" ) &&
      tasker.unavailable_tasker_weekday !== date.getDay() &&
      tasker.available_task_type === state.session.currentTask.task_type
    )
  })
  // console.log(availableTaskers, 'availabletaskers');
  return availableTaskers;
}

export const availableTaskersByHighestRating = state => {
  const availableTaskers = selectAvailableTaskers(state);
  return availableTaskers.sort((taskerA, taskerB) => taskerB.percent_positive - taskerA.percent_positive);
}

export const availableTaskersByLowestPrice = state => {
  const availableTaskers = selectAvailableTaskers(state);
  // console.log(availableTaskers.sort((taskerA, taskerB) => taskerA.price_per_hour - taskerB.price_per_hour), 'sortedbylowestprice');
  return availableTaskers.sort((taskerA, taskerB) => taskerA.price_per_hour - taskerB.price_per_hour);
}

export const availableTaskersByHighestPrice = state => {
  const availableTaskers = selectAvailableTaskers(state);
  // console.log(availableTaskers.sort((taskerA, taskerB) => taskerB.price_per_hour - taskerA.price_per_hour), 'sortedbyhighestprice');
  return availableTaskers.sort((taskerA, taskerB) => taskerB.price_per_hour - taskerA.price_per_hour);
}

export const availableTaskersByMostReviews = state => {
  const availableTaskers = selectAvailableTaskers(state);
  // console.log(availableTaskers.sort((taskerA, taskerB) => taskerB.num_of_reviews - taskerA.num_of_reviews), 'sortedbymostreviews');
  return availableTaskers.sort((taskerA, taskerB) => taskerB.num_of_reviews - taskerA.num_of_reviews);
}

export const availableTaskersByMostTasks = state => {
  const availableTaskers = selectAvailableTaskers(state);
  // console.log(availableTaskers.sort((taskerA, taskerB) => taskerB.num_of_completed_tasks - taskerA.num_of_completed_tasks), 'sortedbymosttasks');
  return availableTaskers.sort((taskerA, taskerB) => taskerB.num_of_completed_tasks - taskerA.num_of_completed_tasks);
}

export const availableTaskersByRecommended = state => {
  const sortedByMostTasks = availableTaskersByMostTasks(state);
  // console.log(sortedByMostTasks.sort((taskerA, taskerB) => taskerB.percent_positive - taskerA.percent_positive), 'sortedbyrecommended');
  return sortedByMostTasks.sort((taskerA, taskerB) => taskerB.percent_positive - taskerA.percent_positive);
}

export const selectCurrentUserTasks = state => {
  const allTasks = values(state.entities.tasks);
  // console.log(allTasks, 'alltasks');
  const currentUserTasks = allTasks.filter(task => task.user_id === state.session.currentUser.id && task.form_complete === true);
  return currentUserTasks.reverse();
}
