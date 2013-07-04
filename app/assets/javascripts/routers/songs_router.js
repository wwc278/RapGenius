RapGenius.Routers.Songs = Backbone.Router.extend({

  initialize: function(options){

    this.$rootEl = options.$rootEl;
    this.$sideBar = options.$sideBar;
  },

  routes: {
    ""              : "index",
    "songs/:id"     : "showSong",
    "songs/:song_id/note/:id?selection=:selection" : "newNote",
  },

  index: function(){
    console.log("called index")
    var that = this;
    RapGenius.songs.fetch();

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
      song_id: id,
      $sideBar: that.$sideBar,
    })

    that.$rootEl.html(songView.render().$el);
  },

  newNote: function(song_id, id, selection){
    var that = this;
    var selectedSong = RapGenius.songs.get(id);
    var newNoteView = new RapGenius.Views.NoteNew({
      song_id: song_id,
      selection: selection,
    })
  },

});
