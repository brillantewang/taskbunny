# json.extract! user, :id, :email, :is_tasker, :num_of_reviews, :num_of_completed_tasks, :percent_positive, :tasker_description, :price_per_hour
json.(
  user,
  :id,
  :first_name,
  :last_name,
  :zip_code,
  :email,
  :is_tasker,
  :num_of_reviews,
  :num_of_completed_tasks,
  :percent_positive,
  :tasker_description,
  :price_per_hour,
  :image_url
)
