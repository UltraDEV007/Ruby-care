class AddFactorsToFoods < ActiveRecord::Migration[6.0]
  def change
    add_column :foods, :factors, :string
  end
end
