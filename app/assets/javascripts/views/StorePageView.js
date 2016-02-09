var app = app || {};

app.StorePageView = Backbone.View.extend({
  el: '#main',

  render: function () {

    var storePageViewTemplate = _.template($('#storePageViewTemplate').html());
    this.$el.html(storePageViewTemplate);

    // this.collection.each(function (product) {
      var productListPageView = new app.ProductListPageView({ collection: this.collection });
      productListPageView.render();
    // });

  }

});