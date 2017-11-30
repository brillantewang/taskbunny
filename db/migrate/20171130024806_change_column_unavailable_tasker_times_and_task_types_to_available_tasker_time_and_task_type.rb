class ChangeColumnUnavailableTaskerTimesAndTaskTypesToAvailableTaskerTimeAndTaskType < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :unavailable_tasker_times
    remove_column :users, :unavailable_task_types
    add_column :users, :available_tasker_time, :string, default: '8:00am'
    add_column :users, :available_task_type, :string, default: 'General Cleaning'
  end
end
