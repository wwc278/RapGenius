RapGenius.Views.SongShow = Backbone.View.extend({

  // initialize: function(){
  //   var that = this;

  //   that.listenTo($lyrics, 'all', that.render);
  // },

  events: {
    "click #lyrics":      "annotate",
  },

  template: JST['songs/show'],

  render: function(){
    var that = this;
    var renderedContent = that.template({
      song: that.model,
    })

    that.$el.html(renderedContent);
    return that;
  },

  annotate: function(){

    var selection = window.getSelection();
    var range = selection.getRangeAt();
    var start = selection.getRangeAt().startOffset;
    var contents = range.cloneContents();

    var link = "<a>" + contents.textContent + "</a>";
    $('contents').html(function(index, oldhtml){
      
    })
    console.log(range, start, link)

  }

});
