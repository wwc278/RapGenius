RapGenius.Models.Song = Backbone.Model.extend({

  // jsonRoot: "song",

  // initialize: function(){
  //   this.notes = new RapGenius.Collections.Notes;
  //   this.notes.url = '/songs/' + this.id + '/notes';
  //   this.notes.on("reset", this.updateCounts);
  // },

  parse: function(json){
    if (!this.notes){
      this.notes = new RapGenius.Collections.Notes({
        song: this,
      });
    }

    if (!this.scholars){
      this.scholars = new RapGenius.Collections.Users({
        song: this,
      })
    }

    this.notes.set(json.notes);
    this.scholars.set(json.scholars);
    delete json.notes;
    delete json.scholars;

    return json;
  },

  // toJSON: function(options){
  //   var json = Backbone.Model.prototype.toJSON.call(this, options);

  //   json.song.notes_attributes = this.notes.toJSON();
  //   return json;
  // },

});
