class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :insight
  validates_presence_of :content, :user
end
