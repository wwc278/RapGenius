class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.text  :lyrics, :null => false
      t.string :title, :null => false
      t.string :artist, :null => false
      t.timestamps
    end
  end
end
