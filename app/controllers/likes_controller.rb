class LikesController < ApplicationController
  before_action :set_like, only: [:destroy]
  before_action :set_likes, only: [:show]
  before_action :authorize_request, only: [:create, :destroy] 

  # GET /likes
  def index
    @likes = Like.all
    # no point in showing "updated_at" for a like, you can't update a like, only create or "undo" (delete) one.
    render json: @likes.map {|like| like.attributes.except('updated_at').merge({insight_title: like.insight.title, user: like.user.name})}
  end

  # GET /likes/1
  def show
    render json: @likes, include: :user
  end

  # POST /like
  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like, status: :created, location: @like
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /likes/1
  def destroy
    @like = Like.find(params[:id])
    if @like.present?
      @like.destroy
    end
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
