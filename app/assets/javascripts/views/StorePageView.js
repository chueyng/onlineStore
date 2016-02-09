var app = app || {};

app.StorePageView = Backbone.View.extend({
  el: '#main',

  render: function () {
    // Gets the activityPageViewTemplate from our app.html.erb to setup the view structure
    var storePageViewTemplate = _.template($('#storePageViewTemplate').html());
    // Sets #main HTML to activity view template's HTML
    this.$el.html(storePageViewTemplate);

    // this.collection.each(function (product) {
      var productListPageView = new app.ProductListPageView({ collection: this.collection });
      productListPageView.render();
    // });

  }

});