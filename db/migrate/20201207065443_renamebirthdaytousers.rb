class Renamebirthdaytousers < ActiveRecord::Migration[6.0]
  def change
    change_column :users, birthday::date, :limit => nil 
  end
end
