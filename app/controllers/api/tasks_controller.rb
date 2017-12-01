class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
    render :index
  end

  def create
    @task = Task.new(task_params)

    if @task.valid?
      @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find_by(id: params[:id])
    @task.destroy!
    render :show
  end

  def show
    @task = Task.find_by(id: params[:id])
    render :show
  end

  private

  def task_params
    params.require(:task).permit(:task_type, :date, :time, :location, :description, :vehicle_requirements, :user_id, :tasker_id, :complete)
  end
end
