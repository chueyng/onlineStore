# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :text
#  description :text
#  price       :money
#  image       :string
#  kitchen_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ActiveRecord::Base
  has_many :line_items
  has_many :orders, through: :line_items

  before_destroy :check_has_any_line_item

  private
  # ensure that there are no line items referencing this product
  def check_has_any_line_item
    if line_items.count.zero?
      return true
    else
      errors.add(:base, 'Line Items present')
      return false
    end
  end
end
