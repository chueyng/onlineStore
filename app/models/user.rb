# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :text
#  email           :string
#  password_digest :string
#  role            :string
#  image           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_many :orders
  has_secure_password
  validates :email, :presence => true
  validates :name, :presence => true, :length => { :minimum => 2 }
end
