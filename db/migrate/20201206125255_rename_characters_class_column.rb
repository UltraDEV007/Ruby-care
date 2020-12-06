class RenameCharactersClassColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :medications, :class, :medication_class
  end
end
