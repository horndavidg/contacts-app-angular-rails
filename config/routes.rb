Rails.application.routes.draw do
  root to: 'statics#index' 
  resources :contacts, only: [:index, :show, :create, :update, :destroy]
end
