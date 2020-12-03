class SymptomsController < ApplicationController
  before_action :authorize_request, only: [:index, :show, :create, :update, :destroy]
  before_action :set_user_symptom, only: [ :update, :destroy]

  # GET /symptoms
  def index
    @symptoms = @current_user.symptoms 
    render json: @symptoms
  end

  # GET /symptoms/1
  def show
    render json: @symptom, include: :user
  end

  # POST /symptoms
  def create
    @symptom = Symptom.new(symptom_params)
    @symptom.user = @current_user

    if @symptom.save
      render json: @symptom, status: :created, location: @symptom
    else
      render json: @symptom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /symptomss/1
  def update
    if @symptom.update(symptom_params)
      render json: @symptom
    else
      render json: @symptom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /symptomss/1
  def destroy
    @symptom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_symptom
      @symptom = Symptom.find(params[:id])
    end

    def set_user_symptom
      @symptom = @current_user.symptoms.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def symptom_params
      params.require(:symptom).permit(:name, :time, :user_id)
    end
end
