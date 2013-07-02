class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.text :annotated_text, :null => false
      t.integer :song_id, :null => false
      t.timestamps
    end
  end
end
