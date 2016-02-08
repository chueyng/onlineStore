# == Schema Information
#
# Table name: orders
#
#  id             :integer          not null, primary key
#  order_name     :text
#  order_address  :text
#  order_date     :date
#  payment_type   :string
#  payment_status :string
#  deliver_status :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer
#

class Order < ActiveRecord::Base
  has_many :line_items, :dependent => :destroy
  has_many :products, :through => :line_items
  belongs_to :user

  PAYMENT_TYPES = [ "Debit card", "Credit card" ]
  validates :payment_type, :inclusion => PAYMENT_TYPES

  def add_line_items_from_cart(cart)
    cart.line_items.each do |item|
      item.cart_id = nil
      line_items << item
    end
  end
end
