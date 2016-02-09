var app = app || {};

app.AppRouter = Backbone.Router.extend({
  initialize: function(){

  },
  routes: {
    'store': 'store',
    'mydetails': 'myDetails',
    'cart': 'MyCartContainer'
  },
  store: function () {
    app.products = new app.Products();
    app.products.fetch().done(function () {
      var StorePageView = new app.StorePageView({collection: app.products});
      StorePageView.render();
    });
  },

  myDetails: function () {
    var EditUserDetailsPageView = new app.EditUserDetailsPageView({ model: app.current_user });
    EditUserDetailsPageView.render();
  },

  MyCartContainer: function () {
    var cartPageView = new app.CartPageView({ model: app.cart });
    cartPageView.render();
  }
});