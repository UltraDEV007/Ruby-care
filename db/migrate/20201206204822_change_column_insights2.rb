class ChangeColumnInsights2 < ActiveRecord::Migration[6.0]
  def change
    change_column :insights, :title, :string, :limit => 32 
  end
end
