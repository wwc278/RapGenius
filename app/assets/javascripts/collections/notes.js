RapGenius.Collections.Notes = Backbone.Collection.extend({

  initialize: function(options){
    this.song = options.song;
  },

  model: RapGenius.Models.Note,
  
  url: function(){
    return this.song.url() + "/notes"
  }, 

});
