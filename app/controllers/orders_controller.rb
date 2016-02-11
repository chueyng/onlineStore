class OrdersController < ApplicationController
  skip_before_filter :authorise, only: [:new, :create]
  before_action :set_order, only: [:show, :edit, :update, :destroy]

  # GET /orders
  # GET /orders.json
  def index
    @orders = Order.paginate :page=>params[:page], :per_page => 10
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
  end

  # GET /orders/new
  def new
    @cart = current_cart
    if @cart.line_items.empty?
      redirect_to store_path, :notice => "Your cart is empty"
      return
    end

    @order = Order.new
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create
    @order = Order.new(order_params)

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

    respond_to do |format|
      if @order.save
        # Cart.destroy(session[:cart_id])
        # session[:cart_id] = nil
        # Notifier.order_received(@order).deliver unless @current_user.present?
        NotificationMailer.order_received( @current_user, @order ).deliver_now if @current_user.present?

        flash[:message] = "Payment successful for #{ @current_user.name.capitalize }, $#{ '%.2f' % (params[:total_price].to_f / 100) } was paid!"
        format.html { redirect_to root_path, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: @order }
      else
        format.html { render :new }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def order_params
      if params[:order]
        params.require(:order).permit(:order_firstName, :order_lastName, :order_streetLine1, :order_streetLine2, :order_postcode, :order_suburb, :order_state)
      else
        params.permit(:order_firstName, :user_id, :order_lastName, :order_streetLine1, :order_streetLine2, :order_postcode, :order_suburb, :order_state)
      end
      # params.require(:order).permit(:order_firstName);
    end
end
