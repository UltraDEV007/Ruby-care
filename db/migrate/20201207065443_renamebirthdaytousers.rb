class Renamebirthdaytousers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :birthday, :datetime, :limit => nil 
  end
end
