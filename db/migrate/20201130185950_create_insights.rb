class CreateInsights < ActiveRecord::Migration[6.0]
  def change
    create_table :insights do |t|
      t.string :title
      t.string :description
      t.text :body
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
