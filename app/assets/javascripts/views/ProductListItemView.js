var app = app || {};

app.ProductListItemView = Backbone.View.extend({
  className: 'productList',
  events: {
    'click img': 'showProduct',
    'click .addCartButton': 'goToCartPageView',
    'click .testCheckoutButton': 'goToOrderPageView'
  },
//populate "li" with member of the same group through ProdcutListPageView
  render: function() {
    var templater = _.template( $('#productListItemViewTemplate').html() );
    var productListItemView = templater( this.model.toJSON() );
    this.$el.html(productListItemView);
    $(".entry").append(this.el);
  },

  showProduct: function() {
    app.router.navigate('products/' +this.model.get('id'), true);
    $("#productModal").modal("show");
  },

  goToCartPageView: function() {
    // if ( event.which !== ENTER_KEY || !this.$input.val().trim() ) {
    //     return;
    //   }

    app.carts.create( this.newAttributes() );
    app.router.navigate("/cart", true);
  },

  //** Hard Code and wait for Sylvain's code ready
  goToOrderPageView: function() {
    var orderPageView = new app.OrderPageView({ model: app.order });
    orderPageView.render();
  }
});
