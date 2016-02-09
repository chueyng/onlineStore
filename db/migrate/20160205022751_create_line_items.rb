class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.integer :order_id
      t.integer :product_id
      t.integer :cart_id
      t.decimal :price, :precision => 8, :scale => 2
      t.integer :quantity, :default => 1

      t.timestamps null: false
    end
  end
end
