var app = app || {};

app.ProductListItemView = Backbone.View.extend({
  className: 'productList',
  events: {
    'click img': 'showProduct',
    'click .addCartButton': 'goToCartPageView',
    'click .testCheckoutButton': 'goToOrderPageView',
    'click .button_check_val': 'validQuantity'
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
    var cartPageViewTemplate = _.template($('#cartPageViewTemplate').html());
    this.$el.append( cartPageViewTemplate );

    // check for this product that may already be in the cart
    var lineItem = app.carts.findWhere({product_id: this.model.get('id')});

    if (lineItem) {
      lineItem.set('quantity', lineItem.get('quantity') + 1);

      var cartView = new app.CartListPageView({collection: app.carts});
      cartView.render();
    } else {
      // Product is not already in the cart
      // create a new list item (with the product ID that was clicked)
      // Pass that into the cart
      var listItem = new app.ListItem({
        product_id: this.model.get("id")
      });

      listItem.product = this.model;
      app.carts.create( listItem );
    }
    // var totalPrice = 0;
    // totalPrice = parseInt(this.model.product.get('price')) * this.model.get('quantity');
    // $('.total-price').text(totalPrice);
    app.router.navigate("/cart", true);
  },

  goToOrderPageView: function() {
    var orderPageView = new app.OrderPageView({ model: app.order });
    orderPageView.render();
  }

});
