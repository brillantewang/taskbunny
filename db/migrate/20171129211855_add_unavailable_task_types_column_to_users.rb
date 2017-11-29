class AddUnavailableTaskTypesColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :unavailable_task_types, :string, array: true, default: []
  end
end
