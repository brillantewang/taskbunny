class ChangeTimeDataTypeToStringForTasksTime < ActiveRecord::Migration[5.1]
  def change
    change_column :tasks, :time, :string
  end
end
