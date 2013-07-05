class AddSnippetColumnToNotesTable < ActiveRecord::Migration
  def change
    add_column :notes, :snippet, :string, :null => false
  end
end
