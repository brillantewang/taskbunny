class Api::SessionsController < ApplicationController
  def create
    errors = []

    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      render :show
    else
      errors << "Email can't be blank" if params[:user][:email].empty?
      errors << "Password can't be blank" if params[:user][:password].empty?
      errors = ["Incorrect email or password."] if errors.empty?
      render json: errors, status: 404
    end
  end

  def destroy
    if current_user
      log_out!
      render json: {}
    else
      render json: ["User not found"], status: 404
    end
  end
end
