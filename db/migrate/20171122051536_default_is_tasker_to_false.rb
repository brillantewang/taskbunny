class DefaultIsTaskerToFalse < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :is_tasker, :boolean, :default => false
  end
end
