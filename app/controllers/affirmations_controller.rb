class AffirmationsController < ApplicationController
  # before_action :set_affirmation, only: [:show] 
  before_action :authorize_request, only: [:index, :show, :create, :update, :destroy] #add :index if showing moods of current user, get rid of showing foods of all users
  before_action :set_user_affirmation, only: [ :update, :destroy]
  # GET /affirmations
  def index
    # @affirmations = Affirmation.all
    @affirmations = @current_user.affirmations #only get current users affirmations

    render json: @affirmations, include: :user
  end

  # GET /affirmations/1
  def show
    render json: @affirmation, include: :user
  end

  # POST /affirmations
  def create
    @affirmation = Affirmation.new(affirmation_params)
    @affirmation.user = @current_user

    if @affirmation.save
      render json: @affirmation, status: :created, location: @affirmation
    else
      render json: @affirmation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /affirmations/1
  def update
    if @affirmation.update(affirmation_params)
      render json: @affirmation
    else
      render json: @affirmation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /affirmations/1
  def destroy
    @affirmation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_affirmation
      @affirmation = Affirmation.find(params[:id])
    end

    def set_user_affirmation
      @affirmation = @current_user.affirmations.find(params[:id])
    end


    # Only allow a trusted parameter "white list" through.
    def affirmation_params
      params.require(:affirmation).permit(:content, :user_id)
    end
end
