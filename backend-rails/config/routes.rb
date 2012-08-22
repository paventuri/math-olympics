BackendRails::Application.routes.draw do
  devise_for :users
  resources :profiles 

  root :to => 'profiles#show'
end
