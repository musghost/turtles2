define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var TurtleModel = Backbone.Model.extend({
    defaults: {
      name: '',
      commonName: '',
			forename: '',
	    gender: ''
    },
    urlRoot: '/turtle'
  });
  // Return the model for the module
  return TurtleModel;
});
