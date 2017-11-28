class ChangeVehicleRequiredNullConstraintToTrue < ActiveRecord::Migration[5.1]
  def change
    change_column :tasks, :vehicle_requirements, :string, null: true
  end
end
