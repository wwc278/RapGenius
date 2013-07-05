RapGenius.Views.NoteShow = Backbone.View.extend({
  
  template: JST['notes/show'],

  render: function(){
    var that = this;
    var renderedContent = that.template({
      note: that.model,
    })

    that.$el = renderedContent;
    return that;
  },

})