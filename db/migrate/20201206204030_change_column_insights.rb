class ChangeColumnInsights < ActiveRecord::Migration[6.0]
  def change
    change_column :insights, :title, :string, :limit => 10
  end
end
