define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'js/collections/turtles',
  'text!templates/turtles/list.html'
], function($, _, Backbone, TurtlesCollection, turtlesListTemplate){
  var TurtleListView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
      this.collection = new TurtlesCollection();
      this.collection.add({ name: "Ginger Kid"});
      // Compile the template using Underscores micro-templating
      var compiledTemplate = _.template( turtlesListTemplate, { turtles: this.collection.models } );
      this.$el.html(compiledTemplate);
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return TurtleListView;
});