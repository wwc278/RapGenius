class Album < ActiveRecord::Base
  attr_accessible :title, :artist

  has_many :songs
end
