class AddDefaultFalseToTasksComplete < ActiveRecord::Migration[5.1]
  def change
    change_column :tasks, :complete, :boolean, default: false
  end
end
