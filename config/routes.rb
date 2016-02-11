Rails.application.routes.draw do

  get 'pages/index'

  # get '/users/edit' => 'users#edit'
  get '/login' => "session#new"
  post '/login' => "session#create"
  delete '/login' => "session#destroy"
  get 'store/index' => 'store#index', :as => 'store'

  get '/app' => 'pages#app', :as => 'app'

  root :to => "store#index"

  resources :carts
  resources :users
  resources :line_items
  resources :products
  resources :orders
  resources :charges

end
