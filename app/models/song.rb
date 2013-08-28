class Song < ActiveRecord::Base
  include PgSearch
  pg_search_scope :search_by_title, :against => :title
  attr_accessible :lyrics, :title, :artist, :album_id

  belongs_to :album
  has_many :notes
  has_many :scholars, :through => :notes, :source => :scholar

  # forgo overriding as_json because it does not apply to all controller actions
  # def as_json(options = {})
  #   super(options.merge(:include => [:notes, :scholars]))
  # end
end
