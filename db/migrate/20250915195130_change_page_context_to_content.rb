class ChangePageContextToContent < ActiveRecord::Migration[8.0]
  def change
    rename_column :pages, :context, :content
  end
end
