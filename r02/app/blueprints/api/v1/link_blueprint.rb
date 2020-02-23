# frozen_string_literal: true

module Api
  module V1
    class LinkBlueprint < Blueprinter::Base
      identifier :id
      fields :name, :url
    end
  end
end
