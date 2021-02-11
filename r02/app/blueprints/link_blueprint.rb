# frozen_string_literal: true

class LinkBlueprint < Blueprinter::Base
  identifier :id
  fields :name, :url
end
