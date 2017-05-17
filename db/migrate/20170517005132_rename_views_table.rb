class RenameViewsTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :recently_views, :views
  end
end
