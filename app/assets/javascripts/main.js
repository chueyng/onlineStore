_.templateSettings = {
 evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
 interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

var app = app || {};

app.ENTER_KEY = 13;

$(document).ready(function(){
  //if "#main" is not exist, do not run backbone. (to avoid undefined error on /feedbacks pages .)
  if ( $("#main").length === 0 ) {
    return;
  }

  app.router = new app.AppRouter();
  Backbone.history.start();
});