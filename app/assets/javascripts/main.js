_.templateSettings = {
 evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
 interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

var app = app || {};
var totalPrice = 0;
var totalAmount = 0;

app.ENTER_KEY = 13;

$(document).ready(function(){
  //if "#main" is not exist, do not run backbone. (to avoid undefined error on /feedbacks pages .)
  if ( $("#main").length === 0 ) {
    return;
  }

  app.router = new app.AppRouter();
  Backbone.history.start();
});