var app = app || {};

app.ProductListPageView = Backbone.View.extend({
  render: function () {
    this.collection.each(function (product) {
      var productListItemView = new app.ProductListItemView({ model: product });
      productListItemView.render();
    });
  }
});
