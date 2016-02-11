class ChargesController < ApplicationController
  def new
  end

  def create
    @user = User.find params[:user_id].to_i

    # Amount in cents
    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :source  => params[:stripeToken]
    )

    begin
      charge = Stripe::Charge.create(
        :customer    => customer.id,
        :amount      => params[:total_price].to_i,
        :description => 'Rails Stripe customer',
        :currency    => 'AUD' 
      )
    rescue Stripe::CardError => e
      flash[:error] = e.message
      redirect_to new_charge_path
    end


    flash[:message] = "Payment successful for #{ @user.name.capitalize }, $#{  params[:total_price].to_f / 100 } was paid!"
    render "pages/app"
  end
end
