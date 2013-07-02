RapGenius.Views.SongShow = Backbone.View.extend({

  // initialize: function(){
  //   var that = this;
  //   that.listenTo(that.model, 'all', that.render);
  // },

  template: JST['songs/show'],

  render: function(){
    var that = this;
    var renderedContent = that.template({
      song: that.model,
    })

    that.$el.html(renderedContent);
    return that;
  }

});
