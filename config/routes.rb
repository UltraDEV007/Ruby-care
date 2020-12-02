Rails.application.routes.draw do
  resources :affirmations
  resources :insights
  resources :moods
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, :only => [:create, :index]
  #routes only for create and index for users controller
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
