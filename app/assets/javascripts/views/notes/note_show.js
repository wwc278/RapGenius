RapGenius.Views.NoteShow = Backbone.View.extend({

  template: JST['notes/show'],

  render: function(){
    var renderedContent = this.template({
      note: this.model,
      scholars: this.collection,
    })
    this.$el = renderedContent;
    return this;
  },

})