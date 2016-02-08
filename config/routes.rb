Rails.application.routes.draw do

  get '/users/edit' => 'users#edit'
  get '/login' => "session#new"
  post '/login' => "session#create"
  delete '/login' => "session#destroy"
  get 'store/index' => 'store#index', :as => 'store'

  root :to => "store#index"

  resources :carts
  resources :users
  resources :line_items
  resources :products
  resources :orders

end
