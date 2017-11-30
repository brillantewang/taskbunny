# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'fake_users.csv'))
csv = CSV.parse(csv_text, headers: true, encoding: 'ISO-8859-1')
csv.each do |row|
  t = User.new
  t.email = row['email']
  t.password = row['password']
  t.is_tasker = row['is_tasker']
  t.num_of_reviews = row['num_of_reviews']
  t.num_of_completed_tasks = row['num_of_completed_tasks']
  t.percent_positive = row['percent_positive']
  t.tasker_description = row['tasker_description']
  t.price_per_hour = row['price_per_hour']
  t.first_name = row['first_name']
  t.last_name = row['last_name']
  t.zip_code = row['zip_code']
  t.available_tasker_time = row['available_tasker_time']
  t.available_task_type = row['available_task_type']
  t.image_url = row['image_url']
  t.unavailable_tasker_weekday = row['unavailable_tasker_weekday']
  t.save
end

demo = User.create(email: "demo@gmail.com", password: "helloworld", first_name: "demo", last_name: "user", zip_code: "12345")
brill = User.create(email: "brill@gmail.com", password: "helloworld", first_name: "brill", last_name: "wang", zip_code: "12345")

puts "There are now #{User.count} rows in the transactions table"
