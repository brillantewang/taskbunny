# == Schema Information
#
# Table name: tasks
#
#  id             :integer          not null, primary key
#  type           :string           not null
#  date           :date             not null
#  time           :time             not null
#  location       :string           not null
#  description    :text             not null
#  vehicle_needed :boolean          not null
#  user_id        :integer          not null
#  tasker_id      :integer          not null
#  complete       :boolean          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
