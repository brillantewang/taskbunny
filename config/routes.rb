Rails.application.routes.draw do
  root 'static_pages#root';

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:index, :show, :create, :destroy, :update]
  end

  get 'api/last_task', to: 'api/tasks#last', defaults: {format: :json}
end
