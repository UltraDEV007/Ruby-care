class Renamebirthdaytousers < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :birthday, :string, :limit => nil 
  end
end
