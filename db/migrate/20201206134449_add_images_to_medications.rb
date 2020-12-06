class AddImagesToMedications < ActiveRecord::Migration[6.0]
  def change
    add_column :medications, :image, :string
  end
end
