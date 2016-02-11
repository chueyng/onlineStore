Rails.application.routes.draw do

  get 'pages/index'

  # get '/users/edit' => 'users#edit'
  get '/login' => "session#new"
  post '/login' => "session#create"
  delete '/logout' => "session#destroy"
  get 'store/index' => 'store#index', :as => 'store'

  root :to => 'pages#app'

  get '/app' => 'pages#app', :as => 'app'

  resources :carts
  resources :users
  resources :line_items
  resources :products
  resources :orders

end
