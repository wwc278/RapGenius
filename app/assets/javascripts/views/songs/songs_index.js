RapGenius.Views.SongsIndex = Backbone.View.extend({

  initialize: function(){
    var that = this;
    that.listenTo(that.collection, 'all', that.render);
  },

  template: JST['songs/index'],

  render: function(){
    console.log("called render")

    var that = this;
    var renderedContent = this.template({
      songs: that.collection,
    })

    that.$el.html(renderedContent);
    return that;
  }

});
