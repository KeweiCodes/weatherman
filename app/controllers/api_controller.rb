class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user!
  before_action :doorkeeper_authorize!
  before_action :allow_cross_origin_requests
  before_action :default_format_json
  respond_to :json, :xml

  def preflight
    render nothing: true
  end

  def current_user
    @current_user ||= User.find_by(id: doorkeeper_token.resource_owner_id)
  end

  private

  def allow_cross_origin_requests
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Allow-Headers'] =
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Requested-With, X-Prototype-Version, Token, '\
      'X-Messenger-Token, X-Messenger-Mobile'
    headers['Access-Control-Max-Age'] = '1728000'
  end

  def default_format_json
    request.format = 'json' unless params[:format]
  end

  rescue_from ActiveRecord::RecordNotFound, with: (lambda do
    render json: { error: 'Not Found' }, status: 404
  end)
end
