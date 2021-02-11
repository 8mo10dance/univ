# frozen_string_literal: true

class Link < ApplicationRecord
  validates :name, presence: true
  validates :url, presence: true
end
