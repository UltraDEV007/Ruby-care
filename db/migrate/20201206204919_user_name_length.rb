class UserNameLength < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :name, :string, :limit => 30
  end
end
