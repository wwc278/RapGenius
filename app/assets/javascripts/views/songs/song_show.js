RapGenius.Views.SongShow = Backbone.View.extend({

  initialize: function(options){
    var that = this;
    that.model = options.model;
    // that.noteCollection = options.noteCollection;
    that.song_id = options.song_id;
    that.$sideBar = options.$sideBar;

  },

  events: {
    "click #lyrics":      "checkSelection",
    "click .annotate":    "showNewNoteSidebar",
  },

  template: JST['songs/show'],

  annotateButtonTemplate: JST['songs/annotate_button'],

  render: function(){
    var that = this;
    var renderedContent = that.template({
      song: that.model,
      song_id: that.song_id,
    })
    that.$el.html(renderedContent);
    return that;
  },

  checkSelection: function(e){
    var that = this;
    var selection = window.getSelection();
    that.range = selection.getRangeAt();
    var start = that.range.startOffset;
    var end = that.range.endOffset;
    var x_coord = e.pageX;
    var y_coord = e.pageY;
    var annotateButton = "";
    console.log(start, end)

    if (!(start === end)){
      annotateButton = that.annotateButtonTemplate({
        x_coord: x_coord,
        y_coord: y_coord,
      })
    }
    $("button.annotate").remove();
    that.$el.append(annotateButton);


  },

  showNewNoteSidebar: function(){
    $("button.annotate").remove();

    var that = this;
    var newNoteView = new RapGenius.Views.NoteNew({
      model: new RapGenius.Models.Note(),
      collection: RapGenius.notes,
      song_id: that.model.id,
      range: that.range,
    });

    that.$sideBar.html(newNoteView.render().$el);
  },



});

