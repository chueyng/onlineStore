var app = app || {};

app.StorePageView = Backbone.View.extend({
  el: '#main',

  render: function () {
    // Gets the storePageViewTemplate from our app.html.erb to setup the view structure

    var storePageViewTemplate = _.template($('#storePageViewTemplate').html());
    this.$el.html(storePageViewTemplate);

    var productListPageView = new app.ProductListPageView({ collection: this.collection });
    productListPageView.render();
  }

});