var app = app || {};

app.CartListItemPageView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click .button_check_val': 'validQuantity',
    'click .btn-danger': 'deleteItem',
    'click .button_continue': 'backToShopping',
    'click .button_check_val': 'cartToOrder',
    'change input.valueQuantity': 'updateCart'

  },

  updateCart: function () {
    var newQuantity = this.$el.find('input.valueQuantity').val();
    this.model.set('quantity', newQuantity);

    var cartView = new app.CartListPageView({collection: app.carts});
    // totalAmount = 0;
    cartView.render();
  },

//populate "li" with member of the same group through ProdcutListPageView
  render: function() {

    var templater = _.template( $('#cartListItemPageViewTemplate').html() );

    var templateDetails = _.extend( this.model.toJSON(), this.model.product.toJSON() );

    var cartListItemPageView = templater( templateDetails );
    this.$el.html(cartListItemPageView);

    $("#cartLineItemViewContainer div").filter('.buttons-a, .buttons-b').remove();

    $("#cartLineItemViewContainer").append(this.$el);

    // totalPrice = parseInt(this.model.product.get('price')) * this.model.get('quantity');

    totalAmount = 0;
    $('.total-price').each(function (i, t) {
      totalAmount += parseFloat($(t).text());
    });
    this.$('.total-amount').text(totalAmount.toFixed(2));
  },

  deleteItem: function () {
    app.carts.remove( this.model );
    this.$el.remove();
  },

  backToShopping: function () {
    var newQuantity = this.$el.find("input.valueQuantity").val().trim();
    newQuantity = parseInt( newQuantity );

    this.model.set("quantity", newQuantity);
    app.router.navigate("/store", true)
  },

  cartToOrder: function () {
    app.router.navigate("/order", true)
  },

  goToStripe: function () {

  }
});