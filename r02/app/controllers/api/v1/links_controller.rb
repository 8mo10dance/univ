# frozen_string_literal: true

module Api
  module V1
    class LinksController < ApplicationController
      def index
        links = Link.order(id: :DESC)

        render json: { links: Api::V1::LinkBlueprint.render_as_json(links) }
      end
    end
  end
end
