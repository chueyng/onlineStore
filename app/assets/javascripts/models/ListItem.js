var app = app || {};

app.ListItem = Backbone.Model.extend({
  urlRoot: "/carts",

  defaults: {
    quantity: 1
  },

  initialize: function(){

  }
});