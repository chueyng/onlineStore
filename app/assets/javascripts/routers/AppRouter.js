var app = app || {};

app.AppRouter = Backbone.Router.extend({
  initialize: function(){

  },
  routes: {
    'store': 'store',
    'mydetails': 'myDetails'
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
  }
});