RapGenius.Views.NoteNew = Backbone.View.extend({

  events: {
    'click input[type="submit"]': "submit",

  },

  initialize: function(options){
    this.selection = options.selection;
    this.song_id = options.song_id;
  },

  template: JST['notes/new'],

  render: function(){
    var that = this;

    var docFrag = that.selection.getRangeAt().cloneContents();
    var selection_text = $(docFrag).text();

    var renderedContent = that.template({
      song_id: that.song_id,
      selection_text: selection_text,
    });

    that.$el.html(renderedContent);
    return that;
  },

  submit: function(e){
    e.preventDefault();

    var attrs = $(e.target.form).serializeJSON();
    console.log(attrs)

  },

});
