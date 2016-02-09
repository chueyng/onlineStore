var app = app || {};

app.ProductListItemView = Backbone.View.extend({
  tagName: 'li',
  events: {
  'click .addCartButton': 'goToCartPageView'
  },
//populate "li" with member of the same group through ProdcutListPageView
  render: function() {
    var templater = _.template( $('#productListItemViewTemplate').html() );
    var productListItemView = templater( this.model.toJSON() );
    this.$el.html(productListItemView);
    $(".productList").append(this.el)
    // $('#leaderList').append( LeaderboardListItemView  );
  },

  goToCartPageView: function() {
    // if ( event.which !== ENTER_KEY || !this.$input.val().trim() ) {
    //     return;
    //   }
    var cartPageViewTemplate = _.template($('#cartPageViewTemplate').html());
    this.$el.html( cartPageViewTemplate );// $("#main")????

    // create a new list item (with the product ID that was clicked)
    // Pass that into the cart
    var listItem = new app.ListItem({
      product_id: this.model.get("id")
    });
    listItem.product = this.model;

    app.carts.create( listItem ); //broken
    app.router.navigate("/cart", true);
  },
});