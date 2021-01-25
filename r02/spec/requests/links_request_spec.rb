# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Links', type: :request do
  describe 'GET /links' do
    subject(:get_index) { get '/links' }

    it '200が返ること' do
      get_index

      expect(response).to have_http_status :ok
    end
  end

  describe 'GET /links/new' do
    subject(:get_new) { get '/links/new' }

    it '200が返ること' do
      get_new

      expect(response).to have_http_status :ok
    end
  end

  describe 'POST /links' do
    subject(:post_create) { post '/links' }

    it '一覧画面にリダイレクトすること' do
      post_create

      expect(response).to redirect_to links_path
    end
  end

  describe 'GET /links/:id' do
    subject(:get_show) { get "/links/#{link.id}" }

    let(:link) { create(:link) }

    it '200が返ること' do
      get_show

      expect(response).to have_http_status :ok
    end
  end

  describe 'GET /links/:id/edit' do
    subject(:get_edit) { get "/links/#{link.id}/edit" }

    let(:link) { create(:link) }

    it '200が返ること' do
      get_edit

      expect(response).to have_http_status :ok
    end
  end

  describe 'PATCH /links/:id' do
    subject(:patch_update) { patch "/links/#{link.id}" }

    let(:link) { create(:link) }

    it '詳細画面にリダイレクトすること' do
      patch_update

      expect(response).to redirect_to link_path(link)
    end
  end

  describe 'DELETE /links/:id' do
    subject(:delete_destroy) { delete "/links/#{link.id}" }

    let(:link) { create(:link) }

    it '一覧画面にリダイレクトすること' do
      delete_destroy

      expect(response).to redirect_to links_path
    end
  end
end
