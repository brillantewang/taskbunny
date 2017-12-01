@tasks.each do |task|
  json.set! task.id do
    json.(
      task,
      :id,
      :task_type,
      :date,
      :time,
      :location,
      :description,
      :vehicle_requirements,
      :user_id,
      :tasker_id,
      :complete
    )
    json.tasker task.tasker
  end
end
