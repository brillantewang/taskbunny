class RenameTimeColumnToTaskTime < ActiveRecord::Migration[5.1]
  def change
    rename_column :tasks, :time, :task_time
  end
end
