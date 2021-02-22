class AddTakenToMedications < ActiveRecord::Migration[6.0]
  def change
    add_column :medications, :is_taken, :boolean
  end
end
