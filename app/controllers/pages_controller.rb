class PagesController < ApplicationController
  before_action :assign_page
  def show
  end

  def update
    @page.update(page_params)
  end

  private

  def assign_page
    @page = Page.first
  end

  def page_params
    params.expect(page: [:content])
  end
end
