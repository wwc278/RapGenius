window.RapGenius = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $navBar = $(".nav");
    var $rootEl = $('#content');
    var $sideBar = $('#sideBar');
    RapGenius.songs = new RapGenius.Collections.Songs();
    RapGenius.notes = new RapGenius.Collections.Notes();
    RapGenius.songs.fetch();
    RapGenius.notes.fetch();

    new RapGenius.Routers.Songs({
      "$rootEl": $rootEl,
      "$sideBar": $sideBar,
      "$navBar" : $navBar,
    });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  RapGenius.initialize();
});