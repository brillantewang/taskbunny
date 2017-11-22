# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           not null
#  password_digest        :string           not null
#  session_token          :string           not null
#  is_tasker              :boolean          not null
#  num_of_reviews         :integer
#  num_of_completed_tasks :integer
#  percent_positive       :integer
#  tasker_description     :string
#  price_per_hour         :integer
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
