# frozen_string_literal: true

require 'rails_helper'

RSpec.describe GleeManagesController, type: :controller do
  describe '#index' do
    subject(:get_index) { get :index }

    it { is_expected.to have_http_status(:ok) }
  end
end
