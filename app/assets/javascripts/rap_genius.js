window.RapGenius = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $navBar = $(".nav");
    var $rootEl = $('#content');
    var $sideBar = $('#side_bar');
    RapGenius.sideBarTravelHeight = $sideBar.offset().top;
    RapGenius.songs = new RapGenius.Collections.Songs();

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

$(window).scroll(function(){
  var $sideBar = $("#side_bar");
  var distanceScrolled = $('body').scrollTop();
  if ($sideBar.length === 1){
    if ((!$sideBar.hasClass('fixed')) && 
      (distanceScrolled >= RapGenius.sideBarTravelHeight)){
      $sideBar.addClass('fixed');
    } else if ($sideBar.hasClass('fixed') && 
      (distanceScrolled < RapGenius.sideBarTravelHeight)){   
      $sideBar.removeClass('fixed');
    }
  }
})