class Like < ApplicationRecord
  belongs_to :user
  belongs_to :insight

  validates :insight, uniqueness: { scope: :user }

  def insight_name
    self.insight.title
  end
end
