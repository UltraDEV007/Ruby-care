class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments, include: :user
  end

  # GET /comments/1
  def show
    render json: @comment, include: :user
  end

  # POST /comments
  def create
    @insight = Insight.find(params[:insight_id])
    @comment = @insight.comments.new(comment_params)
    @comment.user = @current_user

    if @comment.save
      render json: @comment, status: :created, location: @insight
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:content).merge(user_id: @current_user.id)
    end
end
