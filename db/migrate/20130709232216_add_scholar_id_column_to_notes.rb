class AddScholarIdColumnToNotes < ActiveRecord::Migration
  def change
    add_column :notes, :scholar_id, :integer, :null => false
  end
end
