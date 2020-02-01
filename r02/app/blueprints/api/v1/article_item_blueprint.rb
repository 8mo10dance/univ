# frozen_string_literal: true

module Api
  module V1
    class ArticleItemBlueprint < Blueprinter::Base
      identifier :id
      fields :text
    end
  end
end
