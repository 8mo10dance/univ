# frozen_string_literal: true

module Api
  module V1
    class UpdateHistoryBlueprint < Blueprinter::Base
      identifier :id
      fields :description, :update_date
    end
  end
end
