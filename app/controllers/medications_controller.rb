class MedicationsController < ApplicationController
  before_action :authorize_request, only: [:index, :show, :create, :update, :destroy]
  before_action :set_user_symptom, only: [ :update, :destroy]

  # GET /symptoms
  def index
    @medications = @current_user.medications 
    render json: @medications
  end

  # GET /symptoms/1
  def show
    render json: @medication, include: :user
  end

  # POST /symptoms
  def create
    @medication = Medication.new(medication_params)
    @medication.user = @current_user

    if @medication.save
      render json: @medication, status: :created, location: @medication
    else
      render json: @medication.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /symptoms/1
  def update
    if @medication.update(medication_params)
      render json: @medication
    else
      render json: @symptom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /symptoms/1
  def destroy
    @medication.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_medication
      @medication = Medication.find(params[:id])
    end

    def set_user_medication
      @medication = @current_user.medications.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def medication_params
      params.require(:medication).permit(:name, :time, :user_id)
    end
end
