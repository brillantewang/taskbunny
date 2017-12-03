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

  def update
    @task = Task.find_by(id: params[:id])

    if @task
      @task.update(task_params)
      render :show #does this render the task before it was updated, or after? shouldn't @task still point to the original task?
    else
      render json: ["Task not found"], status: 404
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
    params.require(:task).permit(:id, :form_complete, :task_type, :date, :task_time, :location, :description, :vehicle_requirements, :user_id, :tasker_id, :complete)
  end
end
