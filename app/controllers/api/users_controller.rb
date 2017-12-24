class Api::UsersController < ApplicationController
  def index # info on eager loading https://www.sitepoint.com/silver-bullet-n1-problem/
    @users = User.all.includes(:tasker_tasks, :user_tasks)
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render :show
    else
      p @user.errors.full_messages
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :password,
      :first_name,
      :last_name,
      :zip_code,
      :is_tasker,
      :num_of_reviews,
      :num_of_completed_tasks,
      :percent_positive,
      :tasker_description,
      :price_per_hour,
      :unavailable_tasker_times
    )
  end
end
