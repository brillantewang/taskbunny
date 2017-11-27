class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :type, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.string :location, null: false
      t.text :description, null: false
      t.boolean :vehicle_needed, null: false
      t.integer :user_id, null: false
      t.integer :tasker_id, null: false
      t.boolean :complete, null: false

      t.timestamps
    end

    add_index :tasks, :user_id
    add_index :tasks, :tasker_id
  end
end
