# frozen_string_literal: true

module Api
  module V1
    class ArticleGroupsController < ApplicationController
      include Api::RenderableCamelCase

      def index
        @article_groups = ArticleGroup.joins(articles: :article_items).merge(Article.order(published_at: :DESC)).distinct

        render_with_camelized_keys(article_groups: Api::V1::ArticleGroupBlueprint.render_as_json(@article_groups))
      end
    end
  end
end
