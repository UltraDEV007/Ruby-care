class AddDescriptionToMedications < ActiveRecord::Migration[6.0]
  def change
    add_column :medications, :description, :string
  end
end
