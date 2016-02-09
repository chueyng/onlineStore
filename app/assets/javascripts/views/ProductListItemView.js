var app = app || {};

app.ProductListItemView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click img': 'showProduct'
  },
//populate "li" with member of the same group through ProductListPageView
  render: function() {
    var templater = _.template( $('#productListItemViewTemplate').html() );
    var productListItemView = templater( this.model.toJSON() );
    this.$el.html(productListItemView);
    $(".productList").append(this.el);
  },

  showProduct: function() {

    app.router.navigate('products/' +this.model.get('id'), true);
    $("#productModal").modal("show");
  }
});
