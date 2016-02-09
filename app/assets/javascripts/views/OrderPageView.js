var app = app || {};

app.OrderPageView = Backbone.View.extend({
  el: '#main',

  render: function () {
    console.log("orderPageView")
    // Gets the orderPageViewTemplate from our app.html.erb to setup the view structure
    var orderPageViewTemplate = _.template($('#orderPageViewTemplate').html());
    this.$el.html(orderPageViewTemplate);
  }

});