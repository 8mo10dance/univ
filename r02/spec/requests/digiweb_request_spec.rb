# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Digiweb', type: :request do
  describe 'GET /digiweb' do
    subject(:get_root) { get digiweb_url }

    it '200が返ること' do
      get_root
      expect(response).to have_http_status :ok
    end
  end
end
