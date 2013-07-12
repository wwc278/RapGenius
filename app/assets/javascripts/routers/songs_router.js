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
    console.log("index fetch")
    RapGenius.songs.fetch({
      success: function(){
        that.$rootEl.attr("id", ""); //clear second joyride
        that.$rootEl.find("div.song-list").attr("id", "numero1");
        if (!RapGenius.joyRide1){
          RapGenius.runJoyRide();
          RapGenius.joyRide1 = true;
        }
      }
    });

    var indexView = new RapGenius.Views.SongsIndex({
      collection: RapGenius.songs,
    });
    // that.$navBar.html(JST['navbar']({active: "home"}));
    that.$rootEl.html(indexView.render().$el);
    // that.$rootEl.addClass("so-awesome");
    that.$sideBar.html("<div>");
    
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
      that.$rootEl.attr("id", "numero2");
      that.$rootEl.find("div.scholars").attr("id", "numero3");
      if (!RapGenius.joyRide2){
        RapGenius.runJoyRide();
        RapGenius.joyRide2 = true;
      }
      // accepts a callback to show note from showLyricAndNote
      if (callback){
        callback(song_id, note_id);
      }
    })
  },

  _getSong: function(id, callback){
    var song = RapGenius.songs.get(id);

    // If song is not found, create a new song with the id, fetch it
    // from the database, then add it.
    if (!song){
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
    // If song is found but notes and scholars are missing, fetch those items
    // from the database, then update the model.
    } else if (song.notes.length === 0 || song.scholars.length === 0){
      song.fetch({
        success: function(){
          console.log("ajax success song fetch 2")
          callback(song);
        }
      })
    } else {
      callback(song);
    }
  },

  showNote: function(song_id, id){
    console.log("router show note")
    var that = this;
    that._getSong(song_id, function(selectedSong){
      that._getNote(selectedSong, id, function(){
        var noteShowView = new RapGenius.Views.NoteShow({
          model: selectedSong.notes.get(id),
          collection: selectedSong.scholars,
        });
        var fixed = that.$sideBar.find(".fixed");
        var width = fixed.css("width");
        that.$sideBar.html(noteShowView.render().$el);
        if (fixed.length > 0){
          that.$sideBar.find("div").css("width", width);
          that.$sideBar.find("div").addClass("fixed")
        };
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
    console.log("router lyric and note")
    var that = this;
    that.showSong(song_id, that.showNote.bind(that), id);
  },

  about: function(){
    var active = Backbone.history.fragment;
    var templateFn = JST['about'];
    var renderedContent = templateFn();

    this.$rootEl.html(renderedContent);
    this.$sideBar.html("");

  },

  contact: function(){
    var renderedContent = JST['contact']
    this.$rootEl.html(renderedContent);
    this.$sideBar.html("");
  },





});
