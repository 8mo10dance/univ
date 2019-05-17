# frozen_string_literal: true

Rails.application.routes.draw do
  resource 'digiweb', only: :show, controller: 'digiweb'
end
