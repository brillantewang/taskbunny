class DropDefaultValues < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:users, :first_name, nil)
    change_column_default(:users, :last_name, nil)
    change_column_default(:users, :zip_code, nil)
  end
end
