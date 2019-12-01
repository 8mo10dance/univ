# frozen_string_literal: true

require 'swagger_helper'

describe Api::V1::ListMenusController do
  path '/api/v1/list_menus' do
    get 'list_menus' do
      tags 'リンク集'
      produces 'application/json'

      response '200', 'success' do
        schema(
          type: :object,
          properties: {
            list_menu_list: {
              type: :array,
              items: {
                type: :object,
                properties: {
                  name: {
                    type: :string,
                  },
                  items: {
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
                required: %w[name items],
              },
            },
          },
          required: %w[list_menu_list],
        )

        run_test!
      end
    end
  end
end
