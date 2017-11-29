class AddUnavailableTaskerTimesColumnToUsersTable < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :unavailable_tasker_times, :string, array: true, default: []
  end
end
