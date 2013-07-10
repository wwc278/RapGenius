class NotesController < ApplicationController
  before_filter :authenticate_user!, :except => :index
  respond_to :json

  def index
    @song = Song.find(params[:song_id])
    @notes = @song.notes
    render :json => @notes
  end

  def create
    @note = current_user.notes.build(params[:note])
    if @note.save
      render :json => @note
    else
      render :json => @note, :status => 422
    end
  end

  def show
    @note = Note.find(params[:id])
    render :json => @note
  end
end
