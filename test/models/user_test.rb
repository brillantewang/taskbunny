# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  email                      :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  is_tasker                  :boolean          default(FALSE), not null
#  num_of_reviews             :integer
#  num_of_completed_tasks     :integer
#  percent_positive           :integer
#  tasker_description         :string
#  price_per_hour             :integer
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  first_name                 :string           not null
#  last_name                  :string           not null
#  zip_code                   :integer          not null
#  image_url                  :string
#  available_tasker_time      :string           default("8:00am")
#  available_task_type        :string           default("General Cleaning")
#  unavailable_tasker_weekday :integer
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
