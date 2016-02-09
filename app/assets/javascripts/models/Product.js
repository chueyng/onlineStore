var app = app || {};

app.Product = Backbone.Model.extend({
  urlRoot: "/products",

  initialize: function(product){
    console.log(product);
  }
});