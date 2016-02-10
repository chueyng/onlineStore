var app = app || {};

app.CartListItemPageView = Backbone.View.extend({
  el: '#cartLineItemViewContainer',
  tagName: 'li',

//populate "li" with member of the same group through ProdcutListPageView
  render: function() {
    var templater = _.template( $('#cartListItemPageViewTemplate').html() );
    var cartListItemPageView = templater( this.model.toJSON() );
    this.$el.html(cartListItemPageView);
    $(".itemList").append(this.el)
  }
});