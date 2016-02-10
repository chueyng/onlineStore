var app = app || {};

app.CartListItemPageView = Backbone.View.extend({
  el: '#cartLineItemViewContainer',
  tagName: 'li',

  events: {
    'click .button_check_val': 'validQuantity',
    'click .btn-danger': 'deleteItem'
  },


//populate "li" with member of the same group through ProdcutListPageView
  render: function() {
    var templater = _.template( $('#cartListItemPageViewTemplate').html() );

    var templateDetails = _.extend( this.model.toJSON(), this.model.product.toJSON() );

    var cartListItemPageView = templater( templateDetails );
    this.$el.html(cartListItemPageView);
    $(".itemList").append(this.el)
  },

  validQuantity: function () {
    var newQuantity = this.$el.find("input.valueQuantity").val().trim();
    newQuantity = parseInt( newQuantity );

    this.model.set("quantity", newQuantity);
  },

  deleteItem: function () {
    app.carts.remove( this.model );
    this.$el.remove();
  }
});