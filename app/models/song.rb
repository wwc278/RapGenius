class Song < ActiveRecord::Base
  attr_accessible :lyrics, :title, :artist

  has_many :notes
end
