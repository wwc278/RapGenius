RapGenius.Views.ScholarsIndex = Backbone.View.extend({

  template: JST['users/scholars_index'],

  render: function(){
    var renderedContent = this.template({
      scholars: this.collection,
    })
    this.$el = renderedContent;
    return this;
  },

});
