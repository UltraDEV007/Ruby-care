class FixColumnName3 < ActiveRecord::Migration[6.0]
  def change
    rename_column :foods, :cause, :factors
  end
end
