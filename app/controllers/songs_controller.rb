class SongsController < ApplicationController
  before_filter :authenticate_user!
  respond_to :json
  respond_to :html, :only => :index

  def index
    @songs = Song.all
    respond_to do |f|
      f.html
      f.json {render :json => @songs}
    end
  end
end
