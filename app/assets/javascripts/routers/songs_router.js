RapGenius.Routers.Songs = Backbone.Router.extend({

  initialize: function(options){

    this.$rootEl = options.$rootEl;
  },

  routes: {
    ""          : "index",
    "songs/:id" : "showSong",
  },

  index: function(){
    console.log("called index")
    var that = this;
    RapGenius.songs.fetch();

    var indexView = new RapGenius.Views.SongsIndex({
      collection: RapGenius.songs,
    });
    that.$rootEl.html(indexView.render().$el);
  },

  showSong: function(id){
    var that = this;
    var selectedSong = RapGenius.songs.get(id);

    var songView = new RapGenius.Views.SongShow({
      model: selectedSong,
      song_id: id,
    })

    that.$rootEl.html(songView.render().$el);
  },


});
