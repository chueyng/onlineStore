var app = app || {};

app.AppRouter = Backbone.Router.extend({
  initialize: function(){

  },
  routes: {
    
    'store': 'store'
  },
  store: function () {
    var StorePageView = new app.StorePageView({});
    StorePageView.render();
  }
});