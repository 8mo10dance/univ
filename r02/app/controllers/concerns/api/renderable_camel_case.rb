# frozen_string_literal: true

module Api
  module RenderableCamelCase
    def render_with_camelized_keys(data)
      render json: camelize_keys(data.as_json)
    end

    private

      def camelize_keys(hash)
        hash.deep_transform_keys { |key| key.to_s.camelize(:lower) }
      end
  end
end
