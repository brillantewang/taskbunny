class AddMoreColumnsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :first_name, :string, null: false, default: 'brill'
    add_column :users, :last_name, :string, null: false, default: 'wang'
    add_column :users, :zip_code, :integer, null: false, default: 11111
  end
end
