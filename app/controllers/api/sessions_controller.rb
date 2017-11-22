class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      render :show
    else
      render json: ["Invalid credentials"]
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
