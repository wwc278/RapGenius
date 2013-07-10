class SongsController < ApplicationController
  before_filter :authenticate_user!, :except => :index
  respond_to :json
  respond_to :html, :only => :index

  def index
    @songs = Song.all
    respond_to do |f|
      f.html
      f.json {render :json => @songs}
    end
  end

  def create
    @song = Song.new(params[:song])
    if @song.save
      render :json => @song
    else
      render :json => @song, :status => 422
    end
  end

  def show
    @song = Song.find(params[:id])
    render :json => @song, :include => [:notes, :scholars]
  end

  def update
    @song = Song.find(params[:id])
    if @song.update_attributes(params[:song])
      render :json => @song
    else
      render :json => @song, :status => 422
    end

  end
end
