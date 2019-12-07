# frozen_string_literal: true

module Api
  module V1
    class UpdateHistoriesController < ApplicationController
      def index
        @update_histories = Digiweb::UpdateHistory.order(id: :DESC)
      end
    end
  end
end
