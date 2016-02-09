var app = app || {};

app.ProductListPageView = Backbone.View.extend({
  el: '.entry',

  render: function () {

    this.collection.each(function (product) {
      var productListItemView = new app.ProductListItemView({ model: product });
      productListItemView.render();
    });
    // this.$el.find('.caption h4').append(this.model.get("name"));
    // this.$el.find('.caption p').append(this.model.get("description"));
    // this.$el.find('.price').append(this.model.get("price"));


  }
});
