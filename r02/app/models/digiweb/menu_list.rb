# frozen_string_literal: true

module Digiweb
  class MenuList < ApplicationRecord
    extend Enumerize

    enumerize :category_code, in: {
      link: 0,
      application: 1,
    }
  end
end
