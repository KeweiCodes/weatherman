class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true, with: :exception
  before_action :authenticate_user!

  def index
    render file: "../views/layouts/application"
  end
end
