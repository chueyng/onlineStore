json.array!(@products) do |product|
  json.extract! product, :id, :name, :price, :image, :kitchen_id
  json.url product_url(product, format: :json)
end
