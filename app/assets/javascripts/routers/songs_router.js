RapGenius.Routers.Songs = Backbone.Router.extend({

  initialize: function(options){

    this.$rootEl = options.$rootEl;
    this.$sideBar = options.$sideBar;
    this.$navBar = options.$navBar;
  },

  routes: {
    ""              : "index",
    "about"         : "about",
    "contact"       : "contact",
    "songs_notes"   : "index",
    "songs/:song_id/notes/:id"     : "showLyricAndNote",
    "songs/:id"     : "showSong",
    "notes/:id"                    : "showNote",
  },

  index: function(){
    var that = this;

    var indexView = new RapGenius.Views.SongsIndex({
      collection: RapGenius.songs,
    });

    that.$navBar.html(JST['navbar']({active: "home"}));
    that.$rootEl.html(indexView.render().$el);
    that.$sideBar.html("");
  },

  showSong: function(song_id, callback, note_id){
    var that = this;
    that._getSong(song_id, function(song){
      var songView = new RapGenius.Views.SongShow({
        model: song,
        $sideBar: that.$sideBar,
      })
      that.$rootEl.html(songView.render().$el);

      if (callback){ //callback to show note, only
        callback(song, note_id);
      }
    })
    that.$navBar.html(JST['navbar']({active: "songs_notes"}));
  },

  _getSong: function(id, callback){
    var song = RapGenius.songs.get(id);
    if (!song){
      song = new RapGenius.Models.Song({id: id});
      song.collection = RapGenius.songs;
      song.fetch({
        success: function(){
          RapGenius.songs.add(song);
          callback(song);
        }
      })
    } else {
      callback(song);
    }
  },

  showNote: function(selectedSong, id){
    var that = this;
    that._getNote(selectedSong, id, function(){
      var noteShowView = new RapGenius.Views.NoteShow({
        model: selectedSong.notes.get(id),
      });
      that.$sideBar.html(noteShowView.render().$el);
    })
  },

  _getNote: function(selectedSong, id, callback){
    var note = selectedSong.notes.get(id);
    if (!note){
      note = new RapGenius.Models.Note({id: id});
      note.collection = selectedSong.notes;
      note.fetch({
        success: function(){
          selectedSong.notes.add(note);
          callback(note);
        }
      })
    } else {
      callback(note);
    }
  },

  showLyricAndNote: function(song_id, id){
    var that = this;
    that.showSong(song_id, that.showNote.bind(that), id);
    that.$navBar.html(JST['navbar']({active: "songs_notes"}));
  },

  about: function(){
    var active = Backbone.history.fragment;
    var templateFn = JST['about'];
    var renderedContent = templateFn();

    this.$navBar.html(JST['navbar']({active: "about"}));
    this.$rootEl.html(renderedContent);
    this.$sideBar.html("");

  },

  contact: function(){
    var renderedContent = JST['contact']
    this.$navBar.html(JST['navbar']({active: "contact"}));
    this.$rootEl.html(renderedContent);
    this.$sideBar.html("");

  },

});
