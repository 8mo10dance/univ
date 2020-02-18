# frozen_string_literal: true

require 'rails_helper'

RSpec.describe HomeController, type: :controller do
  describe '#show' do
    subject { get :show }

    it { is_expected.to have_http_status(:ok) }
  end
end
