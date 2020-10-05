class SessionsController < ApplicationController
  def create
    user = User.find_by(email: session_params[:email])

    if user && user.authenticate(session_params[:password])
      unless params[:nologin]
        if session_params[:remember_device]
          cookies.signed[:remember_device] = { value: user.id, expires: 4.weeks.from_now }
        else
          cookies.delete :remember_device
        end

        session[:user_id] = user.id
      end
      render json: { user: user }
    else
      render json: { error: "Invalid login. Please try again." }, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {}, status: :ok
  end

  private
    # Only allow a list of trusted parameters through.
    def session_params
      params.require(:session).permit(:email, :password, :remember_device)
    end
end
