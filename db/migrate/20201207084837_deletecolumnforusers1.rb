class Deletecolumnforusers1 < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :birthday
  end
end
