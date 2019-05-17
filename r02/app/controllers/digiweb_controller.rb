# frozen_string_literal: true

class DigiwebController < ApplicationController
  def show
    @list_menu_list = list_menu_list
    @histories = Digiweb::UpdateHistory.order(id: :DESC)
  end

  private

    def list_menu_list
      Digiweb::MenuList.category_code.values.map do |category_code|
        {
          name: category_code.text,
          items: Digiweb::MenuList.where(category_code: category_code).map do |menu_list|
            { name: menu_list.name, url: menu_list.url }
          end,
        }
      end
    end
end
