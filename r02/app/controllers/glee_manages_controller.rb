# frozen_string_literal: true

class GleeManagesController < ApplicationController
  MAX_LIST_SIZE = 6

  def index
    file_list = Dir::entries(Rails.root.join('public', 'articles')).select do |filename|
      filename =~ /.html$/
    end

    @file_list_main = file_list.reverse.take(MAX_LIST_SIZE)
    @file_list_sub = file_list.reverse.drop(MAX_LIST_SIZE)

    filename = params[:filename] # action_args入れたい
    @content =
      if filename.present?
        File.open(Rails.root.join('public', 'articles', filename), 'r').read
      else
        File.open(Rails.root.join('public', 'articles', file_list.last), 'r').read
      end
  end
end
