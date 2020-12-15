class UserMailer < ApplicationMailer
 def sign_up_email 
  @user = params[:user]
  mail(to: @user.email, subject: "Welcome to Care #{@user.name}!")
 end
 def update_account_email
  @user = params[:user]
  mail(to: @user.email, subject: "#{@user.name}, you have recently changed your account credentials in Care")
 end
end
