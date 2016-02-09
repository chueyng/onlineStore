var app = app || {};

app.CartPageView = Backbone.View.extend({
  el: '#container',

  render: function() {
    var cartPageViewTemplate = _.template($('#cartPageViewTemplate').html());
    this.$el.html( cartPageViewTemplate );
    // need to set keys/ values (product_id) in local storage
  },

  saveCart: function() {

  }
});