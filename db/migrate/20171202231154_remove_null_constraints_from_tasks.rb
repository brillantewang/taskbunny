class RemoveNullConstraintsFromTasks < ActiveRecord::Migration[5.1]
  def change
    change_column :tasks, :task_type, :string, null: true
    change_column :tasks, :date, :date, null: true
    change_column :tasks, :location, :string, null: true
    change_column :tasks, :description, :text, null: true
    change_column :tasks, :user_id, :integer, null: true
    change_column :tasks, :tasker_id, :integer, null: true
    add_column :tasks, :form_complete, :boolean, default: false, null: false
  end
end
