class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    email = login_params[:email]
    password = login_params[:password]

    if email == "" || password == "" || email == nil || password == nil
       render json: {
        errors: 'unauthorized',
        message: 'Invalid email or password',
      }, status: :unauthorized
      return;
    end 

    @user = User.find_by(email: email)
    
    if (!@user) 
      render json: {
        errors: 'unauthorized',
        message: 'Invalid email or password',
      }, status: :unauthorized
    end

    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: token
        }, status: :ok
    else
      render json: { 
        errors: 'unauthorized', 
        message: 'Invalid email or password'
        }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user.attributes.except("password_digest"), status: :ok
  end


  private

  def login_params
    params.require(:authentication).permit(:email, :password)
  end
end
