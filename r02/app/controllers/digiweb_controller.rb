# frozen_string_literal: true

class DigiwebController < ApplicationController
  def show
    @histories = Digiweb::UpdateHistory.order(id: :DESC)
  end
end
