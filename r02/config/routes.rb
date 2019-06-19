# frozen_string_literal: true

Rails.application.routes.draw do
  resource 'digiweb', only: :show, controller: 'digiweb'

  namespace :api do
    namespace :v1 do
      resources :list_menus, only: :index
    end
  end
end
