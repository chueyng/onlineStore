var app = app || {};

app.AppRouter = Backbone.Router.extend({
  initialize: function(){

  },
  routes: {
    'store': 'store',
    'mydetails': 'myDetails',
    'products/:id': 'viewProduct',
    'cart': 'myCartContainer'
  },
  store: function () {
    app.products = new app.Products();
    app.carts = new app.Carts();

    app.products.fetch().done(function () {
      var StorePageView = new app.StorePageView({collection: app.products});
      StorePageView.render();
    });
  },

  myDetails: function () {
    var EditUserDetailsPageView = new app.EditUserDetailsPageView({ model: app.current_user });
    EditUserDetailsPageView.render();
  },

  viewProduct: function (id) {
    var product = app.products.get(id);
    var productView = new app.ProductView({model: product});
    productView.render();
  },

  myCartContainer: function () {
    var cartPageView = new app.CartPageView({ model: app.cart });
    cartPageView.render();
  }
});