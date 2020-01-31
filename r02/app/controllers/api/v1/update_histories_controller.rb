# frozen_string_literal: true

module Api
  module V1
    class UpdateHistoriesController < ApplicationController
      include Api::RenderableCamelCase

      def index
        @update_histories = Digiweb::UpdateHistory.order(id: :DESC)

        render_with_camelized_keys(update_histories: Api::V1::UpdateHistoryBlueprint.render_as_json(@update_histories))
      end
    end
  end
end
