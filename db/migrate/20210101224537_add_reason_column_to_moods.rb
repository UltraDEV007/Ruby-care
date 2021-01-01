class AddReasonColumnToMoods < ActiveRecord::Migration[6.0]
  def change
    add_column :moods, :reason, :string
  end
end
