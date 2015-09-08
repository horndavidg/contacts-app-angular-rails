Rails.application.routes.draw do
  # root to: 'statics#index' 
  root to: 'contacts#index'
  resources :contacts, only: [:index, :show, :create, :update, :destroy]
end
