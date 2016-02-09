var app = app || {};

app.AppRouter = Backbone.Router.extend({
  initialize: function(){

  },
  routes: {
    
    'store': 'store',
    'mydetails': 'myDetails'
  },
  store: function () {
    var StorePageView = new app.StorePageView({});
    StorePageView.render();
  },

  myDetails: function () {
    var EditUserDetailsPageView = new app.EditUserDetailsPageView({ model: app.current_user });
    EditUserDetailsPageView.render();
  }
});