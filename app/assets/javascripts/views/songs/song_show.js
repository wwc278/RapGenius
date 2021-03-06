RapGenius.Views.SongShow = Backbone.View.extend({

  initialize: function(options){
    var that = this;
    that.model = options.model;
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
    })
    that.$el.html(renderedContent);
    return that;
  },

  checkSelection: function(e){
    var that = this;
    var selection = window.getSelection();

    if (selection.type === "None"){
      return
    }

    that.range = selection.getRangeAt();
    var start = that.range.startOffset;
    var end = that.range.endOffset;
    var x_coord = e.pageX;
    var y_coord = e.pageY;
    var annotateButton = "";

    if ((start !== end) &&
      !that.checkForAnchor(that.range) &&
      selection.type !== "Caret") {

      annotateButton = that.annotateButtonTemplate({
        x_coord: x_coord,
        y_coord: y_coord,
      })
  }
    $("button.annotate").remove();
    that.$el.append(annotateButton);
  },

  checkForAnchor: function(range){
    var docFrag = range.cloneContents();
    var children = docFrag.childNodes;
    return _(children).some(function(child){return child.tagName === "A"})
  },

  showNewNoteSidebar: function(){
    $("button.annotate").remove();

    var that = this;
    var newNoteView = new RapGenius.Views.NoteNew({
      model: new RapGenius.Models.Note(),
      collection: that.model.notes,
      song_id: that.model.id,
      range: that.range,
    });
    var fixed = that.$sideBar.find(".fixed");
    var width = fixed.css("width");
    that.$sideBar.html(newNoteView.render().$el);
    if (fixed.length > 0){
      that.$sideBar.find("div").css("width", width);
      that.$sideBar.find("div").addClass("fixed")
    };

    Backbone.history.navigate("songs/" + that.model.id + "/new_note")

    $("#numero2").attr("id",""); //clear second joyride
    $("#numero3").attr("id",""); //clear third joyride
    $(".notenew input[type='submit']").attr("id", "numero4")
    if (!RapGenius.joyRide4){
      RapGenius.runJoyRide({scroll: false});
      RapGenius.joyRide4 = true;
    }
  },

});
