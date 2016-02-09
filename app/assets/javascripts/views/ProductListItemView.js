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
    
    app.carts.create( this.newAttributes() );
    app.router.navigate("/cart", true);
  },
});