RapGenius.Views.SongShow = Backbone.View.extend({

  // initialize: function(){
  //   var that = this;

  //   that.listenTo($lyrics, 'all', that.render);
  // },

  events: {
    "click #lyrics":      "checkSelection",
    "click .annotate":    "annotate",
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
    var selection = window.getSelection();
    that.range = selection.getRangeAt();
    var start = that.range.startOffset;
    var end = that.range.endOffset;
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

  annotate: function(e){
    var lyrics = $("#lyrics").html();
    var start = $(e.currentTarget).data("start");
    var end = $(e.currentTarget).data("end");
    var fragment = lyrics.slice(start, end);
    var link = "<a href=''>" + fragment + "</a>";
    lyrics = lyrics.slice(0,start) + link + lyrics.slice(end, lyrics.length - 1)

    $("#lyrics").html(lyrics);

  },

});

