RapGenius.Views.NoteNew = Backbone.View.extend({

  events: {
    'click input[type="submit"]': "submit",

  },

  initialize: function(options){
    this.range = options.range;
    this.song_id = options.song_id;
  },

  template: JST['notes/new'],

  render: function(){
    var that = this;

    var docFrag = that.range.cloneContents();
    var selection_text = $(docFrag).text();

    var renderedContent = that.template({
      song_id: that.song_id,
      selection_text: selection_text,
    });

    that.$el.html(renderedContent);
    return that;
  },

  submit: function(e){
    var that = this;
    e.preventDefault();

    var attrs = $(e.target.form).serializeJSON();
    that.model.set(attrs);
    that.collection.create(that.model, {
      success: function(){
        that.annotate(that.song_id, that.model.id);
        that.saveLyrics(that.song_id, that.model.id);
      }
    })
  },

  annotate: function(song_id, id){
    var that = this;
    var docFrag = that.range.extractContents();
    var newNode = document.createElement("a");
    newNode.appendChild(docFrag);


    $(newNode).attr('href', "#songs/" + song_id + "/notes/" + id);
    that.range.insertNode(newNode);

  },

  // saves the lyrics with newly created link to song in database
  saveLyrics: function(song_id, note_id){
    var song = RapGenius.songs.get(song_id);
    song.save({song: {lyrics: $("#lyrics").html()} }, {
      success: function(){
        Backbone.history.navigate("songs/" + song_id + "/notes/" + note_id, 
          {trigger: true});
      },

      error: function(){
        console.log("ajax error on annotation save")
      }
    });
  },

  // replace new note form with created note on successful submit
  noteFormReplace: function(noteModel){
    var noteView = new RapGenius.Views.NoteShow({
      model: noteModel,
    })
    this.$noteView.render();
  },

});
