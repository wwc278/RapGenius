RapGenius.Views.NoteNew = Backbone.View.extend({

  events: {
    'click input[type="submit"]': "submit",

  },

  initialize: function(options){
    this.range = options.range;
    this.song_id = options.song_id;
  },

  template: JST['notes/new'],

  render: function(){
    var that = this;

    var docFrag = that.range.cloneContents();
    var selection_text = $(docFrag).text();

    var renderedContent = that.template({
      song_id: that.song_id,
      selection_text: selection_text,
    });

    that.$el.html(renderedContent);
    return that;
  },

  submit: function(e){
    var that = this;
    e.preventDefault();

    var attrs = $(e.target.form).serializeJSON();
    that.model.set(attrs);

    that.collection.create(that.model, {
      success: function(){
        that.annotate(that.model.id);
        that.save(that.song_id);
        Backbone.history.navigate("/notes/" + that.model.id, {trigger: true});
      }
    })
  },

  annotate: function(id){
    var that = this;
    var docFrag = that.range.extractContents();
    var newNode = document.createElement("a");
    newNode.appendChild(docFrag);


    $(newNode).attr('href', "#notes/" + id);
    that.range.insertNode(newNode);

  },

  // saves the lyrics with newly created link to song in database
  save: function(song_id){
    var song = RapGenius.songs.get(song_id);
    song.save({lyrics: $("#lyrics").html()});
  },

});
