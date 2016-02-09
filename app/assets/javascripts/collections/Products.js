var app = app || {};

app.Products = Backbone.Collection.extend({
  model: app.Product,
  url: '/products',

  // initialize: function() {
  //   // var productListView = new app.ProductListView({model: product});
  //   // // Create a new ProductListView and give it some information to represent
  //   // productListView.render();
  // }
});
