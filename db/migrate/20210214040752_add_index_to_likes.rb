class AddIndexToLikes < ActiveRecord::Migration[6.0]
  def change
    # make sure there are no exploits (2 tabs open, etc)
    add_index :likes, [:insight_id, :user_id], unique: true
  end
end