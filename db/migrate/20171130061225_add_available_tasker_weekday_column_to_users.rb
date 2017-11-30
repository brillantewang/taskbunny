class AddAvailableTaskerWeekdayColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :unavailable_tasker_weekday, :integer
  end
end
