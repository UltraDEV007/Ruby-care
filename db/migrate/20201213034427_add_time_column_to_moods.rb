class AddTimeColumnToMoods < ActiveRecord::Migration[6.0]
  def change
    add_column :moods, :time, :datetime
  end
end
