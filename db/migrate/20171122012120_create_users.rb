class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :is_tasker, null: false
      t.integer :num_of_reviews
      t.integer :num_of_completed_tasks
      t.integer :percent_positive
      t.string :tasker_description
      t.integer :price_per_hour

      t.timestamps
    end

    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
