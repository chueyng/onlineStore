class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.text :order_name
      t.text :order_address
      t.date :order_date
      t.string :payment_type
      t.string :payment_status
      t.string :deliver_status

      t.timestamps null: false
    end
  end
end
