class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  def current_user
    begin
      @current_user ||= User.find(session[:user_id])
    rescue ActiveRecord::RecordNotFound
      render json: { error: "You must be logged in."}, status: :unprocessable_entity
    end
  end

  def authenticate_user!
    current_user.present?
  end
end
