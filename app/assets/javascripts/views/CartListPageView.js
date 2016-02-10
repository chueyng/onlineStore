var app = app || {};

app.CartListPageView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "add", this.render);
  },

  render: function () {
    $("#cartLineItemViewContainer").html("");
    this.collection.length && this.collection.each(function (listItem) {
      var cartListItemPageView = new app.CartListItemPageView({ model: listItem });
      cartListItemPageView.render();
    });
  }
});