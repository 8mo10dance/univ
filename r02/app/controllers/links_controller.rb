# frozen_string_literal: true

class LinksController < ApplicationController
  def index; end

  def new; end

  def create
    redirect_to links_path
  end

  def show(id); end

  def edit(id); end

  def update(id)
    @link = Link.find(id)

    redirect_to link_path(@link)
  end

  def destroy(id)
    redirect_to links_path
  end
end
