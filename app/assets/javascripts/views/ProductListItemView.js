var app = app || {};

app.ProductListItemView = Backbone.View.extend({
  tagName: 'li',
//populate "li" with member of the same group through ProdcutListPageView
  render: function() {
    var templater = _.template( $('#productListItemViewTemplate').html() );
    var productListItemView = templater( this.model.toJSON() );
    $(".productList").append(productListItemView)
    // $('#leaderList').append( LeaderboardListItemView  );
  }
});