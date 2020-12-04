class FixColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :foods, :factors, :factor
  end
end
