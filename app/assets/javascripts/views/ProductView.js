var app = app || {};
app.ProductView = Backbone.View.extend({
  el: '#productViewContainer',

  render: function (){
    var productViewTemplater = _.template($('#viewProductTemplate').html());
    this.$el.html( productViewTemplater( this.model.toJSON() ));
  }
});
