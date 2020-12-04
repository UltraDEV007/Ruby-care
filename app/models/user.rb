class User < ApplicationRecord
  has_secure_password

  # found this on stack overflow (for lines 9-11) : https://stackoverflow.com/questions/16342779/activerecord-hide-column-while-returning-object

  # show user details EXCEPT token and password/password_digest when looking for users in database,
  # yes the data is hashed, but it bothers me that it's even viewable.
  # made sure they can't get email as well because you shouldn't get someone's email without their permission, name is fine.
  def as_json(options = {})
    super(options.merge({ except: [:password_digest, :oauth_token, :email] }))
  end

  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }

  has_many :moods, dependent: :destroy
  has_many :insights, dependent: :destroy
  has_many :affirmations, dependent: :destroy
  has_many :symptoms, dependent: :destroy
  has_many :foods, dependent: :destroy
end

