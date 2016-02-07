# == Schema Information
#
# Table name: orders
#
#  id             :integer          not null, primary key
#  order_date     :date
#  delivery_date  :date
#  delivery_time  :time
#  payment_type   :string
#  payment_status :string
#  deliver_status :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer
#  address        :text
#

class Order < ActiveRecord::Base
  has_many :line_items, :dependent => :destroy
  has_many :products, :through => :line_items
  belongs_to :user

  PAYMENT_TYPES = [ "Debit card", "Credit card" ]
  validates :payment_type, :inclusion => PAYMENT_TYPES

  def owner?(user)
    user.present? && (self.user_id == user.id)    #user.present: user logged in, self.user_id: post's user, user.id: log-in user
  end

  def chef?(user)
    user.present? && (user.role == 'chef')
  end

  def customer?(user)
    user.present? && (user.role == 'customer')
  end

  def add_line_items_from_cart(cart)
    cart.line_items.each do |item|
      item.cart_id = nil
      line_items << item
    end
  end
end
