class Like < ApplicationRecord
  belongs_to :user
  belongs_to :insight

  def insight_name
    self.insight.title
  end
end
