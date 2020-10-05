Rails.application.routes.draw do

  get 'me', to: 'users#show'
  resources :users, only: [:create, :index]
  post 'sessions', to: 'sessions#create'
  delete 'sessions', to: 'sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
