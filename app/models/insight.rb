class Insight < ApplicationRecord
#  https://stackoverflow.com/questions/20650403/adding-created-at-desc-functionality-in-rails/20651086
  scope :newest_first, -> { order(created_at: :desc) }
  belongs_to :user
  validates_presence_of :title, :description, :body 
  before_save :capitalize_title

  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy
  
  def capitalize_title
    self.title.capitalize!
  end
  
end
