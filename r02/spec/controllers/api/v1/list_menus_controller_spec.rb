# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::ListMenusController, type: :controller do
  describe '#index' do
    subject(:get_index) { get :index, as: :json }

    it { is_expected.to have_http_status(:ok) }

    it 'responseの形式が正しい' do
      get_index
      expect(response).to match_json_schema('api/v1/list_menu_list')
    end
  end
end
