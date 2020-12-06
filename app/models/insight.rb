class Insight < ApplicationRecord
#  https://stackoverflow.com/questions/20650403/adding-created-at-desc-functionality-in-rails/20651086
  scope :newest_first, -> { order(created_at: :desc) }
  belongs_to :user
end
