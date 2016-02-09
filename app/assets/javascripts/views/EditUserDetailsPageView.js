var app = app || {};

app.EditUserDetailsPageView = Backbone.View.extend({
  el: '#main',

  events: {
    'click .editButton' : 'saveEdit'
  },

  render: function () {
    
    var EditUserDetailsPageViewTemplate = _.template($('#EditUserDetailsPageViewTemplate').html());
    this.$el.html(EditUserDetailsPageViewTemplate(this.model));
    
  },

  saveEdit: function (e) { //e= normal event when form is submitting
    e.preventDefault();
    //prefill the different data from current_user
    app.current_user.name = $("#name").val();
    app.current_user.email = $("#email").val();
    app.current_user.password = $("#password").val();
    app.current_user.password_confirmation = $("#password_confirmation").val();

//bug in the ajax request, I had to do in through Backbone
    var user = new app.User(app.current_user);
    user.save().done(function (data) {
        console.log( 'success', data ); // check the user data is updated
        $("#message").prepend("USER WAS SUCCESSFULLY UPDATED");
        // Clear the #div 
        var appMess = function() {
          $("#message").html("");
        }
        var messUpd = setTimeout(appMess, 1000);  

        $("#currentUserName").text(data.name);
      }).error(function (data) {
        console.log( 'error', data );
        data = JSON.parse( data.responseText );

        $("#error").prepend( data.password_confirmation );
      });
    app.router.navigate("/#", true)

  }

});