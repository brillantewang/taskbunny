Rails.application.routes.draw do
  root 'static_pages#root';

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:create]
  end
end
