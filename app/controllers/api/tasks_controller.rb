class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params)

    if @task.valid?
      @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  private

  def task_params
    params.require(:task).permit(
      :type, :date, :time, :location, :description, :vehicle_needed,
      :user_id, :tasker_id, :complete
    )
  end
end