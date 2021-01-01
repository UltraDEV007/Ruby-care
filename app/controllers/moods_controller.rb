class MoodsController < ApplicationController
  # before_action :set_mood, only: [:show] #not putting moods in show anmyore because I want it to ask for user's token (only user can see it)
  before_action :authorize_request, only: [:index, :show, :create, :update, :destroy] #ask for token #add :index if showing moods of current user, get rid of showing foods of all users
  before_action :set_user_mood, only: [:update, :destroy]

  
  # GET /moods
  def index
    # @moods = Mood.all
    @moods = @current_user.moods 
    render json: @moods
  end

  # GET /moods/1
  def show
    render json: @mood, include: :user
  end

  # POST /moods
  def create
    @mood = Mood.new(mood_params)
    @mood.user = @current_user

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
      params.require(:mood).permit(:status, :time, :reason, :user_id)
    end
end
