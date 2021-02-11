# frozen_string_literal: true

class LinksController < ApplicationController
  def index
    @links = Link.all
  end

  def new
    @link = Link.new
  end

  def create(link)
    @link = Link.new(link_attributes(link))
    return render :new, flash: { danger: @link.errors.full_messages } if @link.invalid?

    @link.save!
    redirect_to links_path, flash: { success: 'リンクが登録されました。' }
  end

  def show(id)
    @link = Link.find(id)
  end

  def edit(id)
    @link = Link.find(id)
  end

  def update(id, link)
    @link = Link.find(id)
    @link.attributes = link_attributes(link)
    return render :new, flash: { danger: @link.errors.full_messages } if @link.invalid?

    @link.save!
    redirect_to link_path(@link), flash: { success: 'リンクの内容が更新されました。' }
  end

  def destroy(id)
    @link = Link.find(id)
    @link.destroy!
    redirect_to links_path, flash: { success: "#{@link.name} を削除しました。" }
  end

  private

    def link_attributes(link_params)
      link_params.permit(:name, :url)
    end
end
