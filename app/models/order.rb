# == Schema Information
#
# Table name: orders
#
#  id                :integer          not null, primary key
#  order_firstName   :text
#  order_lastName    :text
#  order_streetLine1 :text
#  order_streetLine2 :text
#  order_postcode    :integer
#  order_suburb      :string
#  order_state       :string
#  order_phone       :string
#  order_message     :text
#  payment_type      :string
#  payment_status    :string
#  delivery_status   :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  user_id           :integer
#

class Order < ActiveRecord::Base
  has_many :line_items, :dependent => :destroy
  has_many :products, :through => :line_items
  belongs_to :user

  STATES = [ "Australia Capital Territory", "New South Wales", "Northern Territory", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia" ]
  # validates :order_state, :inclusion => STATES

  PAYMENT_TYPES = [ "Debit card", "Credit card" ]
  # validates :payment_type, :inclusion => PAYMENT_TYPES

  def add_line_items_from_cart(cart)
    cart.line_items.each do |item|
      item.cart_id = nil
      line_items << item
    end
  end
end
