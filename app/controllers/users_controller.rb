class UsersController < ApplicationController
  before_action :authorize_request, except: [:create, :index, :show]
  before_action :set_user, except: [:create, :index]
  before_action :can_modify?, only:[:update, :destroy]

  def index
    # show all users, but order by created_at ascending
    # another example:  @users = User.order('name ASC'), order by name ascending.
    @users = User.order('created_at ASC')
    # render the users but down show password digest and updated at (even if hashed)                        # Mapping through the user to get the likes, mapping through the likes to get the insight name.                                                                     
    render json: @users.map {|user| user.attributes.except('password_digest', 'updated_at').merge( {liked_insights: user.likes.map {|like| like.attributes.slice().merge({ :title => like.insight.title, :insight_id => like.insight_id, :like_id => like.id})}})}
  end

  def show
    # getting the user, and his insights, except the insight's user_id, because we already get that when we render the user.
    render json: @user.attributes.except('email, password_digest, updated_at').merge( {liked_insights: @user.likes.map {|like| like.attributes.slice().merge({ :title => like.insight.title, :insight_id => like.insight_id, :like_id => like.id})}}, {insights: @user.insights.map {|insight| insight.attributes.except('updated_at', 'user_id')}})
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({id: @user.id})
      UserMailer.with(user: @user).sign_up_email.deliver_later
      render json: {
        user: @user.attributes.except('password_digest', 'updated_at'), 
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if can_modify?
      if @user.update(user_params)
        UserMailer.with(user: @user).update_account_email.deliver_later
        render json: @user.attributes.except('password_digest', 'created_at'), status: :ok
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    else 
      render json: {error: "Unauthorized action"}, status: :unauthorized
    end
  end


  def destroy
   if can_modify? 
    UserMailer.with(user: @user).delete_account_email.deliver_later
    @user.destroy!
   else 
    render json: {error: "Unauthorized action"}, status: :unauthorized
   end
  end

  private

    def can_modify?
      @current_user.id.to_i == params[:id].to_i
    end
    # Only allow a trusted parameter "white list" through.
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:name, :email, :birthday, :gender, :image, :password)
    end

end
