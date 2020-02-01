# frozen_string_literal: true

module Api
  module V1
    class ArticleBlueprint < Blueprinter::Base
      identifier :id
      fields :title
      association :article_items, blueprint: ArticleItemBlueprint
    end
  end
end
