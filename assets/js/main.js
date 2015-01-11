// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
  	text: '/bower_components/requirejs-text/text',
    jquery: '/bower_components/jquery/dist/jquery',
    underscore: '/bower_components/underscore/underscore',
    backbone: '/bower_components/backbone/backbone'
  }

});

require([

  // Load our app module and pass it to our definition function
  'js/app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});