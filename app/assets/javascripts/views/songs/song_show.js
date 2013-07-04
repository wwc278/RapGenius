RapGenius.Views.SongShow = Backbone.View.extend({

  initialize: function(options){
    this.model = options.model;
    this.song_id = options.song_id;
    this.$sideBar = options.$sideBar;
  },

  events: {
    "click #lyrics":      "checkSelection",
    "click .annotate":    "showNewNoteSidebar",
  },

  template: JST['songs/show'],

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
    that.selection = window.getSelection();
    var range = that.selection.getRangeAt();
    var start = range.startOffset;
    var end = range.endOffset;
    var x_coord = e.pageX;
    var y_coord = e.pageY;
    var annotateButton = "";
    console.log(start, end)

    if (!(start === end)){
      annotateButton = $("<button>");
      annotateButton.text("Annotate Selection");
      annotateButton.addClass("annotate");
      annotateButton.attr('data-start', start);
      annotateButton.attr('data-end', end);
      annotateButton.css("position", "absolute");
      annotateButton.css("left", x_coord);
      annotateButton.css("top", y_coord);

    }
    $("button.annotate").remove();
    that.$el.append(annotateButton);


  },

  showNewNoteSidebar: function(){
    $("button.annotate").remove();

    var that = this;
    var newNoteView = new RapGenius.Views.NoteNew({
      song_id: that.model.id,
      selection: that.selection,
    });

    that.$sideBar.html(newNoteView.render().$el);
  },

  annotate: function(){
    var that = this;
    var range = that.selection.getRangeAt();
    var docFrag = range.extractContents();
    var newNode = document.createElement("a");
    newNode.appendChild(docFrag);


    $(newNode).attr('href', "#");
    range.insertNode(newNode);
    console.log(newNode)


  },

});

