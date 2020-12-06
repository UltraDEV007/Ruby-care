class AddClassesToMedications < ActiveRecord::Migration[6.0]
  def change
    add_column :medications, :class, :string
  end
end
