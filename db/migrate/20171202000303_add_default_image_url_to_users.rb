class AddDefaultImageUrlToUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :image_url, :string, default: "https://res.cloudinary.com/dezmnl5mf/image/upload/v1512006900/dummy_profile_image_m7vtxo.png"
  end
end
