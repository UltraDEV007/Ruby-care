class Changeinsightslimit < ActiveRecord::Migration[6.0]
  def change
    change_column :insights, :title, :string, :limit => 50 
  end
end
