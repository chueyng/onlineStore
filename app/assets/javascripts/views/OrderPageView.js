var app = app || {};

app.OrderPageView = Backbone.View.extend({
  el: '#main',
  events: {
    'submit form': 'goToStripe'
  },

  // goToStripe: function (e) {
  //   e.preventDefault();
  // },

  render: function () {
    console.log("orderPageView", totalAmount)
    // Gets the orderPageViewTemplate from our app.html.erb to setup the view structure
    var orderPageViewTemplate = _.template($('#orderPageViewTemplate').html());
    this.$el.html(orderPageViewTemplate({
      totalAmount: totalAmount * 100,
      id: app.current_user.id
    }));
  }

});