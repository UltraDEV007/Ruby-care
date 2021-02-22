class AddTakendateToMedications < ActiveRecord::Migration[6.0]
  def change
    add_column :medications, :taken_date, :datetime
  end
end
