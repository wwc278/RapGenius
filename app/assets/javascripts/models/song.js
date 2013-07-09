RapGenius.Models.Song = Backbone.Model.extend({
  initialize: function(){
    this.notes = new RapGenius.Collections.Notes;
    this.notes.url = '/songs/' + this.id + '/notes';
    this.notes.on("reset", this.updateCounts);
  },

});
