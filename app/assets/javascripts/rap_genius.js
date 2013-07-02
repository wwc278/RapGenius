window.RapGenius = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    RapGenius.songs = new RapGenius.Collections.Songs();

    new RapGenius.Routers.Songs({
      "$rootEl": $rootEl,
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  RapGenius.initialize();
});