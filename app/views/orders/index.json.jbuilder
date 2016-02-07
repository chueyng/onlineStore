json.array!(@orders) do |order|
  json.extract! order, :id, :order_date, :delivery_date, :delivery_time, :payment_type, :payment_status, :deliver_status, :address
  json.url order_url(order, format: :json)
end
