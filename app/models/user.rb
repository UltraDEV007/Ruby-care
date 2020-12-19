class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }

  has_many :moods, dependent: :destroy
  has_many :insights, dependent: :destroy
  has_many :affirmations, dependent: :destroy
  has_many :symptoms, dependent: :destroy
  has_many :foods, dependent: :destroy
  has_many :medications, dependent: :destroy
  has_many :likes, dependent: :destroy

end

