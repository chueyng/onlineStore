class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.text :order_firstName
      t.text :order_lastName
      t.text :order_streetLine1
      t.text :order_streetLine2
      t.integer :order_postcode
      t.string :order_suburb
      t.string :order_state
      t.string :order_phone
      t.text :order_message
      t.string :payment_type
      t.string :payment_status
      t.string :delivery_status

      t.timestamps null: false
    end
  end
end
