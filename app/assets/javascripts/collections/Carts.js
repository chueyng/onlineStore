var app = app || {};

app.Carts = Backbone.Collection.extend({
  model: app.Cart,
  localStorage: new Backbone.LocalStorage('carts-backbone'),

});
