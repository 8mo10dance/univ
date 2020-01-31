# frozen_string_literal: true

require 'swagger_helper'

describe Api::V1::UpdateHistoriesController do
  path '/api/v1/update_histories' do
    get 'update_histories' do
      tags '更新履歴'
      produces 'application/json'

      response '200', 'success' do
        schema(
          type: :object,
          properties: {
            updateHistories: {
              type: :array,
              items: {
                type: :object,
                properties: {
                  description: {
                    type: :string,
                  },
                  updateDate: {
                    type: :string,
                  },
                },
                required: %w[description updateDate],
              },
            },
          },
          required: %w[updateHistories],
        )

        run_test!
      end
    end
  end
end
