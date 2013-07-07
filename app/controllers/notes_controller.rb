class NotesController < ApplicationController
  before_filter :authenticate_user!, :except => :index
  respond_to :json

  def index
    @notes = Note.all
    render :json => @notes
  end

  def create
    @note = Note.new(params[:note])
    if @note.save
      render :json => @note
    else
      render :json => @note, :status => 422
    end
  end
end
