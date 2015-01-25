define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'js/collections/turtles',
  'text!templates/turtles/view.html',
  'js/models/turtle'
], function($, _, Backbone, TurtlesCollection, turtlesViewTemplate, TurtleModel){
  var TurtleViewView = Backbone.View.extend({
    el: $("#container"),

    initialize: function(){
      this.collection = new TurtlesCollection();
      this.collection.add({ name: "Ginger Kid"});
      // Compile the template using Underscores micro-templating
      var compiledTemplate = _.template( turtlesViewTemplate, { turtles: this.collection.models } );
      this.$el.find('#single-turtle').html(compiledTemplate);
    },

    events: {
      //'click #add-turtle': 'addTurtle'
    }

  });
  // Returning instantiated views can be quite useful for having "state"
  return TurtleViewView;
});