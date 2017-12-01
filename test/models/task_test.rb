# == Schema Information
#
# Table name: tasks
#
#  id                   :integer          not null, primary key
#  task_type            :string           not null
#  date                 :date             not null
#  task_time            :string           not null
#  location             :string           not null
#  description          :text             not null
#  vehicle_requirements :string
#  user_id              :integer          not null
#  tasker_id            :integer          not null
#  complete             :boolean          default(FALSE), not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
