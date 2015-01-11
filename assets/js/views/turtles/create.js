define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'js/collections/turtles',
  'text!templates/turtles/create.html',
  'js/models/turtle'
], function($, _, Backbone, TurtlesCollection, turtlesListTemplate, TurtleModel){
  var TurtleListView = Backbone.View.extend({
    el: $("#container"),

    initialize: function(){
      this.collection = new TurtlesCollection();
      this.collection.add({ name: "Ginger Kid"});
      // Compile the template using Underscores micro-templating
      var compiledTemplate = _.template( turtlesListTemplate, { turtles: this.collection.models } );
      this.$el.find('#create-turtle').html(compiledTemplate);

      this.form = this.$el.find("#form-create");
    },

    showMessage: function(ok){
      this.hideMessages();
      if(ok){
        this.form.find('.alert-success').removeClass('hide');
      } else {
        this.form.find('.alert-danger').removeClass('hide');
      }
    },

    hideMessages: function(){
      this.form.find('.alert').addClass('hide');
    },

    events: {
      'click #add-turtle': 'addTurtle'
    },

    addTurtle: function(e){
      e.preventDefault();
      var _this = this;

      var turtle = new TurtleModel({
        name: $('#turtle-name').val(),
        commonName: $('#turtle-common-name').val(),
        forename: $('#turtle-forename').val(),
        gender: $('#turtle-gender').val()
      });
      turtle.save({}, {
        success: function(model, response, options){
          _this.showMessage(true);
        },
        error: function(model, xhr, options){
          _this.showMessage(false);
        }
      });
      
    }

  });
  // Returning instantiated views can be quite useful for having "state"
  return TurtleListView;
});