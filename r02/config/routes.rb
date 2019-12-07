# frozen_string_literal: true

Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  resource 'digiweb', only: :show, controller: 'digiweb'

  namespace :api do
    namespace :v1 do
      resources :list_menus, only: :index
      resources :update_histories, only: :index
    end
  end
end
