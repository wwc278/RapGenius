class AlbumsController < ApplicationController
  respond_to :json

  def index
    @albums = Album.all
    render :json => @albums
  end
end
