# frozen_string_literal: true

module RenderReactComponentHelper
  def render_react_component(name, args)
    render(partial: 'shared/render_react_component', locals: { name: name, rendering_data: camelize_keys(args.as_json) })
  end

  private

    def camelize_keys(hash)
      hash.deep_transform_keys { |key| key.to_s.camelize(:lower) }
    end
end
