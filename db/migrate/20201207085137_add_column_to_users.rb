class AddColumnToUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :birthday, :datetime
  end
end
