class ChangeColumn < ActiveRecord::Migration[6.0]
  def change
    change_column :foods, :name, :string, :limit => 20
  end
end
