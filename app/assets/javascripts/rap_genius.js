window.RapGenius = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    var $navBar = $(".nav");
    var $rootEl = $('.content');
    var $sideBar = $('.sidebar');
    RapGenius.sideBarTravelHeight = 10;
    RapGenius.songs = new RapGenius.Collections.Songs();

    new RapGenius.Routers.Songs({
      "$rootEl": $rootEl,
      "$sideBar": $sideBar,
      "$navBar" : $navBar,
    });

    Backbone.history.start();
  },

  // uncomment to enable JoyRide feature, kind of gets annoying though, so try to enable it only for first time visitors, or have an option to enable it
  
  // runJoyRide: function(options){
  //   console.log("joyriding")
  //   if (!options){
  //     var options = {}
  //     options.scroll = true;
  //   }
  //   $('#joyRideTipContent').joyride({
  //     scroll: options.scroll,
  //     autoStart : true,
  //     // postStepCallback : function (index, tip) {
  //     //   if (index == 2) {
  //     //     $(this).joyride('set_li', false, 1);
  //     //   }
  //     // },
  //     // postRideCallback: function(){
  //     //   $('.joyride-modal-bg').remove();
  //     // },
  //     modal:true,
  //     expose: true,
  //   });
  //   $('body').append('<div class="joyride-modal-bg">');
  //   $("body .joyride-modal-bg").css("display", "block");

  // },
};

$(document).ready(function(){
  RapGenius.initialize();
});

// fixes annotations when scrolling so annotations always show
$(window).scroll(function(){
  var $sideBar = $(".sidebar div");
  var distanceScrolled = $('body').scrollTop();
  if ($sideBar.length === 1){
    if ((!$sideBar.hasClass('fixed')) && 
      (distanceScrolled >= RapGenius.sideBarTravelHeight)){
      var width = $sideBar.css("width");
      $sideBar.addClass('fixed');
      $sideBar.css("width", width);
    } else if ($sideBar.hasClass('fixed') && 
      (distanceScrolled < RapGenius.sideBarTravelHeight)){   
      $sideBar.removeClass('fixed');
      $sideBar.css("width", "");
    }
  }
})