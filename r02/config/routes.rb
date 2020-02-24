# frozen_string_literal: true

Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  resource :home, only: :show, controller: 'home'
  root to: 'home#show'

  namespace :api do
    namespace :v1 do
      resources :update_histories, only: :index
      resources :article_groups, only: %i[index]
      resources :links, only: %i[index]
    end
  end
end
