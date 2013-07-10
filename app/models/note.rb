class Note < ActiveRecord::Base
  attr_accessible :annotated_text, :song_id, :snippet, :scholar_id

  belongs_to :song
  belongs_to :scholar, 
              :class_name => :User,
              :foreign_key => :scholar_id

  def as_json(options={})
    super(options.merge(:include => :scholar))
  end
end
