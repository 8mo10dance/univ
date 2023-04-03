# frozen_string_literal: true

Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  resources :links
  resource :home, only: :show, controller: 'home'
  root to: 'home#show'

  resource :digiweb, only: :show, controller: 'digiweb'

  namespace :placeorders do
    get '/', to: 'home#show'
  end

  namespace :api do
    namespace :v1 do
      resources :article_groups, only: %i[index]
      resources :links, only: %i[index]
    end
  end
end
