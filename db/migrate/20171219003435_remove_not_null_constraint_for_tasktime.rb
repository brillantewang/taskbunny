class RemoveNotNullConstraintForTasktime < ActiveRecord::Migration[5.1]
  def change
    change_column :tasks, :task_time, :string, null: true
  end
end
