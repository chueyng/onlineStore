json.array!(@orders) do |order|
  json.extract! order, :id, :order_name, :order_address, :order_date, :delivery_date, :delivery_time, :payment_type, :payment_status, :deliver_status
  json.url order_url(order, format: :json)
end
