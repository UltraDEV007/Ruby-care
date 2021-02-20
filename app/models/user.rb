class User < ApplicationRecord
  has_secure_password

  validates :name, presence: true, uniqueness: false
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }
  validates :gender, presence: true, uniqueness: false
  before_save :downcase_email

  has_many :moods, dependent: :destroy
  has_many :insights, dependent: :destroy
  has_many :affirmations, dependent: :destroy
  has_many :symptoms, dependent: :destroy
  has_many :foods, dependent: :destroy
  has_many :medications, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liked_insights, :through => :likes
  has_many :comments
  
  def downcase_email
    self.email.downcase!
  end

end

