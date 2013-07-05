RapGenius.Routers.Songs = Backbone.Router.extend({

  initialize: function(options){

    this.$rootEl = options.$rootEl;
    this.$sideBar = options.$sideBar;
  },

  routes: {
    ""              : "index",
    "songs/:id"     : "showSong",
    "songs/:song_id/notes/:id"     : "showLyricAndNote",
    "notes/:id"                    : "showNote",
  },

  index: function(){
    console.log("called index")
    var that = this;
    // RapGenius.songs.fetch();
    // RapGenius.notes.fetch();

    var indexView = new RapGenius.Views.SongsIndex({
      collection: RapGenius.songs,
    });
    that.$rootEl.html(indexView.render().$el);
    that.$sideBar.html("");
  },

  showSong: function(id){
    var that = this;
    var selectedSong = RapGenius.songs.get(id);
    var songView = new RapGenius.Views.SongShow({
      model: selectedSong,
      noteCollection: RapGenius.notes,
      song_id: id,
      $sideBar: that.$sideBar,
    })

    that.$rootEl.html(songView.render().$el);
  },

  showNote: function(id){
    var that = this;

    var noteShowView = new RapGenius.Views.NoteShow({
      model: RapGenius.notes.get(id),
    });

    that.$sideBar.html(noteShowView.render().$el);
  },

  showLyricAndNote: function(song_id, id){
    console.log("showLyricAndNote")
    var that = this;
    that.showSong(song_id);
    that.showNote(id);
    
  },

});
