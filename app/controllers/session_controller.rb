class SessionController < ApplicationController
  skip_before_filter :authorise

  def new
  end

  def create
    user = User.find_by :email => params[:email]
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      if user.role == 'admin'
        redirect_to root_path
        # redirect_to users_path (old routes rails)
      else
        redirect_to root_path
      end
    else
      flash[:error] = 'Invalid login'
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    session[:cart_id] = nil
    redirect_to root_path
  end
end
