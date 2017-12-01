# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  email                      :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  is_tasker                  :boolean          default(FALSE), not null
#  num_of_reviews             :integer
#  num_of_completed_tasks     :integer
#  percent_positive           :integer
#  tasker_description         :string
#  price_per_hour             :integer
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  first_name                 :string           not null
#  last_name                  :string           not null
#  zip_code                   :integer          not null
#  image_url                  :string
#  available_tasker_time      :string           default("8:00am")
#  available_task_type        :string           default("General Cleaning")
#  unavailable_tasker_weekday :integer
#

class User < ApplicationRecord
  validates :first_name, :last_name, :zip_code, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates_format_of :email, :with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/ # found on https://stackoverflow.com/questions/4776907/what-is-the-best-easy-way-to-validate-an-email-address-in-ruby
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :user_tasks,
    class_name: :Task,
    primary_key: :id,
    foreign_key: :user_id

  has_many :tasker_tasks,
    class_name: :Task,
    primary_key: :id,
    foreign_key: :tasker_id

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    pass_hash = BCrypt::Password.new(self.password_digest)
    pass_hash.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end
end
