@tasks.each do |task|
  json.set! task.id do
    json.(
      task,
      :id,
      :task_type,
      :date,
      :task_time,
      :location,
      :description,
      :vehicle_requirements,
      :user_id,
      :tasker_id,
      :complete,
      :form_complete
    )
    json.tasker task.tasker
  end
end
