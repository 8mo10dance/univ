# frozen_string_literal: true

json.update_histories do
  json.array! @update_histories, :description, :update_date
end
