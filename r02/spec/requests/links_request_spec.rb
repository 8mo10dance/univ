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
    subject(:post_create) { post '/links', params: { link: link_params } }

    let(:link_params) { attributes_for(:link) }

    context '正常系' do
      it '一覧画面にリダイレクトすること' do
        post_create

        expect(response).to redirect_to links_path
      end

      it { expect { post_create }.to change(Link, :count).by(1) }
    end

    context 'name が空の場合' do
      let(:link_params) { attributes_for(:link, name: '') }

      it { expect { post_create }.not_to change(Link, :count) }
    end
  end

  describe 'GET /links/:id' do
    subject(:get_show) { get "/links/#{link.id}" }

    let(:link) { create(:link) }

    before { link }

    it '200が返ること' do
      get_show

      expect(response).to have_http_status :ok
    end
  end

  describe 'GET /links/:id/edit' do
    subject(:get_edit) { get "/links/#{link.id}/edit" }

    let(:link) { create(:link) }

    before { link }

    it '200が返ること' do
      get_edit

      expect(response).to have_http_status :ok
    end
  end

  describe 'PATCH /links/:id' do
    subject(:patch_update) { patch "/links/#{link.id}", params: { link: link_params } }

    let(:link) { create(:link) }
    let(:link_params) { attributes_for(:link, name: 'new name') }

    before { link }

    context '正常系' do
      it '詳細画面にリダイレクトすること' do
        patch_update

        expect(response).to redirect_to link_path(link)
      end

      it 'link の情報が更新される' do
        patch_update

        expect(link.reload.name).to eq 'new name'
      end
    end

    context 'name が空の場合' do
      let(:link_params) { attributes_for(:link, name: '') }

      it 'link の情報は更新されない' do
        expect { patch_update }.not_to change(link.reload, :name)
      end
    end
  end

  describe 'DELETE /links/:id' do
    subject(:delete_destroy) { delete "/links/#{link.id}" }

    let(:link) { create(:link) }

    before { link }

    it '一覧画面にリダイレクトすること' do
      delete_destroy

      expect(response).to redirect_to links_path
    end

    it { expect { delete_destroy }.to change(Link, :count).by(-1) }
  end
end
