class RenameColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :medications, :description, :reason
  end
end
