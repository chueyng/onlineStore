var app = app || {};

app.CartListPageView = Backbone.View.extend({
  render: function () {
    this.collection.each(function (listItem) {
      var cartListItemPageView = new app.CartListItemPageView({ model: listItem });
      cartListItemPageView.render();
    });
  }
});