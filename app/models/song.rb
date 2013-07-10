class Song < ActiveRecord::Base
  attr_accessible :lyrics, :title, :artist, :album_id

  belongs_to :album
  has_many :notes
  has_many :scholars, :through => :notes, :source => :scholar

  def as_json(options = {})
    super(options.merge(:include => [:notes, :scholars]))
  end
end
