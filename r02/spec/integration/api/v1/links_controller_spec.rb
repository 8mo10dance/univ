# frozen_string_literal: true

require 'swagger_helper'

describe Api::V1::LinksController do
  path '/api/v1/links' do
    get 'links' do
      tags 'リンク集'
      produces 'application/json'

      response '200', 'success' do
        schema(
          type: :object,
          properties: {
            links: {
              type: :array,
              items: {
                type: :object,
                properties: {
                  name: {
                    type: :string,
                  },
                  url: {
                    type: :string,
                  },
                },
                required: %w[name url],
              },
            },
          },
          required: %w[links],
        )

        run_test!
      end
    end
  end
end
