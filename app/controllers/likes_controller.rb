class LikesController < ApplicationController
  before_action :set_like, only: [:destroy]
  before_action :set_likes, only: [:show]
  before_action :authorize_request, only: [:create, :destroy] 

  # GET /likes
  def index
    @likes = Like.all

    render json: @likes
  end

  # GET /likes/1
  def show
    render json: @likes, include: :user
  end

  # POST /like
  def create
   puts json:like_params
    @like = Like.new(like_params)
    if @like.save
      render json: @like, status: :created, location: @like
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /likes/1
  def destroy
    @like.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_like
      @like = Like.find_by(user_id: params[:user_id], insight_id: params[:insight_id])
    end

    def set_likes
      @likes = Like.where(user_id: params[:user_id])
    end

    
    # Only allow a trusted parameter "white list" through.
    def like_params
      params.require(:like).permit(:user_id, :insight_id)
    end
end
