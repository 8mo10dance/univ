# frozen_string_literal: true

module Api
  module V1
    class UpdateHistoriesController < ApplicationController
      def index
        @update_histories = Digiweb::UpdateHistory.order(id: :DESC)

        render json: { update_histories: Api::V1::UpdateHistoryBlueprint.render_as_json(@update_histories) }
      end
    end
  end
end
