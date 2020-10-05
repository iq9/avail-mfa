class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:show, :index]

  def index
    users = User.all
    render json: { users: users }
  end

  def show
    render json: { user: current_user }
  end

  def create
    user = User.new(user_params)

    if user.save
      session[:user_id] = user.id
      render json: { user: user }
    else
      render json: { error: "Invalid. Please try again."}, status: :unprocessable_entity
    end
  end


  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:email, :name, :password, :phone_number)
    end
end
