class Note < ActiveRecord::Base
  attr_accessible :annotated_text, :song_id

  belongs_to :song
end
