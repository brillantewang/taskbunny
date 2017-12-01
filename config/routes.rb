Rails.application.routes.draw do
  root 'static_pages#root';

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:index, :create, :destroy]
  end
end
