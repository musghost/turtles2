define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'js/models/turtle'
], function(_, Backbone, TurtleModel){
  var TurtleCollection = Backbone.Collection.extend({
    model: TurtleModel
  });
  // You don't usually return a collection instantiated
  return TurtleCollection;
});