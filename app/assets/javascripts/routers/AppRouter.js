var app = app || {};

app.AppRouter = Backbone.Router.extend({
  initialize: function(){

  },
  routes: {
    'store': 'store',
    // 'product': 'product'
  },
  store: function () {
    app.products = new app.Products();
    app.products.fetch().done(function () {
      var StorePageView = new app.StorePageView({collection: app.products});
      StorePageView.render();
    });
  },

  // product: function () {
  //   var ProductPageView = new app.ProductPageView({});
  //   ProductPageView.render();
  // }
});