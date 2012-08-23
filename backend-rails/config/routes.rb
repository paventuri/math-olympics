BackendRails::Application.routes.draw do
  resources :interactions

  devise_for :users
  resources :profiles 

  root :to => 'profiles#show'
end
