# frozen_string_literal: true

require 'swagger_helper'

describe Api::V1::ArticleGroupsController do
  path '/api/v1/article_groups' do
    get 'article_groups' do
      tags 'マネミ議事録'
      produces 'application/json'

      response '200', 'success' do
        schema(
          type: :object,
          properties: {
            articleGroups: {
              type: :array,
              items: {
                type: :object,
                properties: {
                  publishedAt: {
                    type: :string,
                  },
                  articles: {
                    type: :array,
                    items: {
                      type: :object,
                      properties: {
                        title: {
                          type: :string,
                        },
                        articleItems: {
                          type: :array,
                          items: {
                            type: :object,
                            properties: {
                              text: {
                                type: :string,
                              },
                            },
                            required: %w[text],
                          },
                        },
                      },
                      required: %w[title articleItems],
                    },
                  },
                },
                required: %w[publishedAt articles],
              },
            },
          },
          required: %w[articleGroups],
        )

        run_test!
      end
    end
  end
end
