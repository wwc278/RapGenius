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
    "songs/:id/new_note" : "showSong",
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
    console.log("router showSong")
    var that = this;
    that._getSong(song_id, function(song){
      var songView = new RapGenius.Views.SongShow({
        model: song,
        $sideBar: that.$sideBar,
      })
      var scholarView = new RapGenius.Views.ScholarsIndex({
        collection: song.scholars,
      })
      that.$rootEl.html(songView.render().$el);
      that.$rootEl.append(scholarView.render().$el);
      // accepts a callback to show note from showLyricAndNote
      if (callback){
        callback(song_id, note_id);
      }
    })



    that.$navBar.html(JST['navbar']({active: "songs_notes"}));
  },

  _getSong: function(id, callback){
    var song = RapGenius.songs.get(id);

    // only fetch if song does not exist on client or 
    // if the associated notes or scholars are missing
    if (!song || song.notes.length === 0 || song.scholars.length === 0){
      if (!song){
        song = new RapGenius.Models.Song({id: id});
        song.collection = RapGenius.songs;
      }
      song.fetch({
        success: function(){
          console.log("ajax success song fetch")
          RapGenius.songs.add(song);
          callback(song);
        }
      })
    } else {
      callback(song);
    }
  },

  showNote: function(song_id, id){
    var that = this;
    that._getSong(song_id, function(selectedSong){
      that._getNote(selectedSong, id, function(){
        var noteShowView = new RapGenius.Views.NoteShow({
          model: selectedSong.notes.get(id),
        });
        that.$sideBar.html(noteShowView.render().$el);
      })
    })
  },

  _getNote: function(selectedSong, id, callback){
    var note = selectedSong.notes.get(id);
    if (!note){
      note = new RapGenius.Models.Note({id: id});
      note.collection = selectedSong.notes;
      note.fetch({
        success: function(){
          console.log("ajax success note fetch")
          selectedSong.notes.add(note);
          callback(note);
        }
      })
    } else {
      callback(note);
    }
  },

  showLyricAndNote: function(song_id, id){
    console.log("lyric and note")
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
