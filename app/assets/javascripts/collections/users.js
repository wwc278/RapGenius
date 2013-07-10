RapGenius.Collections.Users = Backbone.Collection.extend({
  initialize: function(options){
    this.song = options.song;
  },

  model: RapGenius.Models.User,

});
