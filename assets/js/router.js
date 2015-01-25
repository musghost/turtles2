define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/turtles/create',
  'js/views/turtles/view',
  'js/views/turtles/list',
  'js/views/users/list'
], function($, _, Backbone, TurtleCreateView, TurtleViewView, TurtleListView, UserListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      /*'': 'showTurtles',
      '/users': 'showUsers',

      // Default
      '*actions': 'defaultAction'*/
      '': 'showTurtles',
      'create': 'newTurtles',
      'view': 'viewTurtle',
      '*actions': 'defaultRoute'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    /*app_router.on('showTurtles', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var turtleListView = new TurtleListView();
      turtleListView.render();
      console.log('showTurtles');
    });
    /*
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('showUsers', function(){
      var userListView = new UserListView();
      userListView.render();
    });*/
    /*app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });*/
    app_router.on('route:newTurtles', function(){
      var turtleCreateView = new TurtleCreateView();
      turtleCreateView.render();
    });
    app_router.on('route:showTurtles', function(){
      var turtleListView = new TurtleListView();
      turtleListView.render();
    });
    app_router.on('route:viewTurtle', function(){
      var turtleViewView = new TurtleViewView();
      turtleViewView.render();
    });
    app_router.on('route:defaultRoute', function(actions){
      alert(actions);
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});