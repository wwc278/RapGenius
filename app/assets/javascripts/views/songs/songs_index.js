RapGenius.Views.SongsIndex = Backbone.View.extend({

  initialize: function(options){
    this.collection = options.collection;
    this.$searchForm = options.$searchForm;

    var that = this;
    that.listenTo(that.collection, 'all', that.render);

    //custom event listener because the search form is present before the view is rendered (provided from the server application.html view)
    that.$searchForm.click(function(e){
      var title = $(e.currentTarget.form).serializeJSON().title;
      console.log(title);
      e.preventDefault();
      RapGenius.songs.fetch({data: {title: title}})

    })
  },

  className: 'song-list',

  events: {
    "click button.new_song": "newSong",
    "click button.cancel"  : "cancelNewSongForm",
    "click .new_song input[type='submit']" : "submitNewSong",
  },

  template: JST['songs/index'],

  newSongTemplate: JST['songs/new'],

  render: function(){

    var that = this;
    var renderedContent = that.template({
      songs: that.collection,
    })

    that.$el.html(renderedContent);
    return that;
  },

  newSong: function(){
    var that = this;
    var renderedContent = that.newSongTemplate({

    });
    $("div.new_song").html(renderedContent);

    $("#numero1").attr("id", "");
    $(".new_song input[type='submit']").attr("id", "numero5");
    RapGenius.runJoyRide();

  },

  cancelNewSongForm: function(e){
    e.preventDefault();
    $('div.new_song').html("<button class='new_song mybtn'>Add New Song</button>");
  },

  submitNewSong: function(e){
    var that = this;
    e.preventDefault();
    var attrs = $(e.target.form).serializeJSON();
    console.log(attrs)
    that.collection.create(attrs)
  },

});
