# frozen_string_literal: true

FactoryBot.define do
  factory :link do
    name { Faker::Lorem.word }
    url { Faker::Internet.url }
  end
end
