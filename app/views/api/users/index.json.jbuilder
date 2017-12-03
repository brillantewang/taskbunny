@users.each do |user|
  json.set! user.id do
    json.(
      user,
      :id,
      :is_tasker,
      :num_of_reviews,
      :num_of_completed_tasks,
      :percent_positive,
      :tasker_description,
      :price_per_hour,
      :first_name,
      :last_name,
      :zip_code,
      :available_tasker_time,
      :available_task_type,
      :unavailable_tasker_weekday,
      :image_url
    )
    json.user_tasks user.user_tasks.pluck(:id)
    json.tasker_tasks user.tasker_tasks.pluck(:id)
  end
end
