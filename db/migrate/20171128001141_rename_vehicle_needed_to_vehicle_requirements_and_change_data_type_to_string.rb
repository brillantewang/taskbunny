class RenameVehicleNeededToVehicleRequirementsAndChangeDataTypeToString < ActiveRecord::Migration[5.1]
  def change
    rename_column :tasks, :vehicle_needed, :vehicle_requirements
    change_column :tasks, :vehicle_requirements, :string
  end
end
