class InsightsController < ApplicationController
  before_action :set_insight, only: [:show]
  before_action :authorize_request, only: [ :create, :update, :destroy] 
  before_action :set_user_insight, only: [ :update, :destroy]

  # GET /insights
  
  def index
    @likes = Like.all
    @insights = Insight.newest_first
    
    for @insight in @insights do  
      @insight.likes = @likes.filter {|like| like.insight_id == @insight.id }
    end
       # Don't need to show the user_id because the user's id is already shown underneath the insight's user part.              
    render json: @insights.map {|insight| insight.attributes.except('updated_at', 'user_id').merge( {user: insight.user.attributes.except('password_digest', 'created_at', 'email', 'updated_at', 'birthday'), likes: insight.likes.map {|like| like.attributes.except('updated_at')} })}
  end

  # GET /insights/1
  def show
    render json: @insight.attributes.except('updated_at', 'user_id').merge( {user: @insight.user.attributes.except('password_digest', 'updated_at', 'email')}, likes: @insight.likes.map {|like| like.attributes.except('updated_at')}, comments: @insight.comments.map {|comment| comment.attributes.merge({user: comment.user.attributes.except("password_digest", "created_at", "updated_at", "email", "birthday")})})
  end

  # POST /insights
  def create
    @insight = Insight.new(insight_params)
    @insight.user = @current_user

    if @insight.save
      render json: @insight, include: :user, status: :created, location: @insight
    else
      render json: @insight.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /insights/1
  def update
    if @insight.update(insight_params)
      render json: @insight, include: :user
    else
      render json: @insight.errors, status: :unprocessable_entity
    end
  end

  # DELETE /insights/1
  def destroy
    @insight.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
    def set_insight
      @insight = Insight.find(params[:id])
    end

    def set_user_insight
      @insight = @current_user.insights.find(params[:id])
    end
    
    # Only allow a trusted parameter "white list" through.
    def insight_params
      params.require(:insight).permit(:title, :description, :body, :user_id)
    end
end
