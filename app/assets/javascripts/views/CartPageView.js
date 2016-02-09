var app = app || {};

app.CartPageView = Backbone.View.extend({
  el: '#main',

  render: function() {

    var cartPageViewTemplate = _.template($('#cartPageViewTemplate').html());
    this.$el.html( cartPageViewTemplate );
    var cartListPageView = new app.CartListPageView({ collection: app.carts });
    cartListPageView.render();
  },
});