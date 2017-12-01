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

class Task < ApplicationRecord
  validates :task_type, :date, :task_time, :location, :description,
    :user_id, :tasker_id, presence: true

  belongs_to :user

  belongs_to :tasker,
    class_name: :User,
    primary_key: :id,
    foreign_key: :tasker_id
end
