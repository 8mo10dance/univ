# frozen_string_literal: true

class ArticleItem < ApplicationRecord
  belongs_to :article, inverse_of: :article_items

  validates :text, presence: true
end
