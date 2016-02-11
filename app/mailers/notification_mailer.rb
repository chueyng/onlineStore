class NotificationMailer < ActionMailer::Base
  default from: "angie.workspace@gmail.com"

  def order_received(user, order)
    @user = user
    @order = order
    mail to: 'angie.workspace@gmail.com', subject: "Online Store Order Confirmation"
  end
end