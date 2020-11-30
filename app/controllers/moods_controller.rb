class MoodsController < ApplicationController
  before_action :set_mood, only: [:show]
  before_action :authorize_request, only: [ :create, :update, :destroy] #add :index if showing foods of current user, get rid of showing foods of all users
  before_action :set_user_mood, only: [ :update, :destroy]

  
  # GET /moods
  def index
    @moods = Mood.all
    # @moods = @current_user.moods #only get current users moods
    render json: @moods, include: :users
  end

  # GET /moods/1
  def show
    render json: @mood, include: :users
  end

  # POST /moods
  def create
    @mood = Mood.new(mood_params)
    @food.user = @current_user

    if @mood.save
      render json: @mood, status: :created, location: @mood
    else
      render json: @mood.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /moods/1
  def update
    if @mood.update(mood_params)
      render json: @mood
    else
      render json: @mood.errors, status: :unprocessable_entity
    end
  end

  # DELETE /moods/1
  def destroy
    @mood.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mood
      @mood = Mood.find(params[:id])
    end

    def set_user_mood
      @mood = @current_user.moods.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def mood_params
      params.require(:mood).permit(:status, :user_id)
    end
end
