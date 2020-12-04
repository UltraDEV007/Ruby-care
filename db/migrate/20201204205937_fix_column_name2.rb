class FixColumnName2 < ActiveRecord::Migration[6.0]
  def change
    rename_column :foods, :factor, :cause
  end
end
