class Note < ActiveRecord::Base
  attr_accessible :annotated_text, :song_id, :snippet

  belongs_to :song
end
