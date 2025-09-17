class PagesController < ApplicationController
  def show
    @page = Page.first
  end
end
