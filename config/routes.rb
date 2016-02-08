Rails.application.routes.draw do
  resources :carts
  get 'store/index'

  get '/users/edit' => 'users#edit'
  get '/login' => "session#new"
  post '/login' => "session#create"
  delete '/login' => "session#destroy"

  resources :users
  resources :line_items
  resources :products
  resources :orders

  root :to => "store#index"


end
