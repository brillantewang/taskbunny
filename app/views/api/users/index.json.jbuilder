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
      :unavailable_tasker_times,
      :unavailable_task_types,
      :image_url
    )
    json.tasker_tasks user.tasker_tasks.pluck(:id)
  end
end
