class FoodsController < ApplicationController
  before_action :authorize_request, only: [:index, :show, :create, :update, :destroy]
  before_action :set_user_food, only: [ :update, :destroy]

  # GET /foods
  def index
    @foods = @current_user.foods 
    render json: @foods
  end

  # GET /foods/1
  def show
    render json: @food, include: :user
  end

  # POST /foods
  def create
    @food = Food.new(food_params)
    @food.user = @current_user

    if @food.save
      render json: @food, status: :created, location: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @food.update(food_params)
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # DELETE /foods/1
  def destroy
    @food.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food
      @food = Food.find(params[:id])
    end

    def set_user_food
      @food = @current_user.foods.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def food_params
      params.require(:food).permit(:name, :time, :rating, :factor, :user_id)
    end
end
