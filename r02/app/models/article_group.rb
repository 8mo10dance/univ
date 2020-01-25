# frozen_string_literal: true

class ArticleGroup < ApplicationRecord
  has_many :articles, inverse_of: :article_group
  accepts_nested_attributes_for :articles

  def published_at
    articles.pluck(:published_at).first
  end
end
