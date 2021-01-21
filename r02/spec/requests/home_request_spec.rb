# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Home', type: :request do
  describe 'GET /' do
    subject(:get_root) { get '/' }

    it '200が返ること' do
      get_root
      expect(response).to have_http_status :ok
    end
  end
end
