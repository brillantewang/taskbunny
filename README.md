# [![alt text](http://res.cloudinary.com/dezmnl5mf/image/upload/v1512150412/taskwombat_logo_gnnuiq.png "TaskWombat")](https://taskwombat.herokuapp.com/#/ "TaskWombat")
TaskWombat is a [TaskRabbit](https://www.taskrabbit.com/ "TaskRabbit") clone. It showcases features of TaskRabbit such as selecting a task and choosing a Tasker based on your preferences.

I called it TaskWombat because I think wombats are interesting animals.

## Technologies used
A key dev tool that I used was `redux logger`, which made testing/debugging a lot easier by allowing me to see `state` before and after an `action` was dispatched.

For example, being able to view the state right after an action was dispatched allowed me to see that my `tasks` slice of state was a single object being overwritten each time, rather than an object with many nested objects for each task. This made me realize that there was something wrong with the way my `TasksReducer` was returning state, and I quickly fixed the issue.

## Challenges Faced
### Task Search
A challenge that I faced was creating the task search bar on the landing page. I spent a while looking through different libraries but eventually realized that I was probably better off hand rolling it on my own since I had to implement very specific behavior to mimic TaskRabbit's search bar. I also thought it would be an awesome learning experience to build out an auto-complete dropdown completely from scratch.

This was nice because I ended up with a `TaskSearch` component that I could re-use in my `Dashboard` with the exact behavior that I wanted. 

### Tasker Sort
Another challenge that I faced was deciding how I was going to sort my taskers based on the user's sorting preferences (by Recommended, by Highest Rating, etc).

I ended up creating a `selectors.js` that had multiple sorting functions that each did its own sorting logic before returning an array of sorted taskers. 

For example:
```
#selectors.js

export const availableTaskersByHighestRating = state => {
  const availableTaskers = selectAvailableTaskers(state);
  return availableTaskers.sort((taskerA, taskerB) => taskerB.percent_positive - taskerA.percent_positive);
}
```

To sort Taskers by Recommended, I simply sorted them by most tasks completed, and then sorted that array again by highest rating: 
```
export const availableTaskersByRecommended = state => {
  const sortedByMostTasks = availableTaskersByMostTasks(state);
  return sortedByMostTasks.sort((taskerA, taskerB) => taskerB.percent_positive - taskerA.percent_positive);
}
```
