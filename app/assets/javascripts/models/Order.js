var app = app || {};

app.Order = Backbone.Model.extend({
  urlRoot: '/orders',

  initialize: function(order){
    console.log('order');
  }
});