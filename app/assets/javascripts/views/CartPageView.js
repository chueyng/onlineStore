var app = app || {};

app.CartPageView = Backbone.View.extend({
  el: '#container',

  render: function() {
    var cartPageViewTemplate = _.template($('#cartPageViewTemplate').html());
    this.$el.html( cartPageViewTemplate );
  }
});