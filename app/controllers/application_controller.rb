class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    render file: "../views/layouts/application"
  end
end
