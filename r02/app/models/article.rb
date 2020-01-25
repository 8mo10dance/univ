# frozen_string_literal: true

class Article < ApplicationRecord
  belongs_to :article_group, inverse_of: :articles
  has_many :article_items, inverse_of: :article

  validates :title, presence: true
end
