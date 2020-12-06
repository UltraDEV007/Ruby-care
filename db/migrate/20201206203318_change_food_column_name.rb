class ChangeFoodColumnName < ActiveRecord::Migration[6.0]
  def change
    change_column :foods, :name, :string, :limit => 55
  end
end
