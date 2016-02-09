json.array!(@products) do |product|
  json.extract! product, :id, :description, :name, :price, :image
  json.url product_url(product, format: :json)
end