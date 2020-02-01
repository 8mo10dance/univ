# frozen_string_literal: true

module Api
  module V1
    class ArticleGroupBlueprint < Blueprinter::Base
      identifier :id
      fields :published_at
      association :articles, blueprint: ArticleBlueprint
    end
  end
end
