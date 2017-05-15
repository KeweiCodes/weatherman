class AddRecentlyViewedTable < ActiveRecord::Migration[5.1]
  def change
    create_table :recently_views do |t|
      t.string :city
      t.integer :user_id
    end
  end
end
