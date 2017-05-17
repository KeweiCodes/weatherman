module Api
  class ViewsController < ApiController
    def index
      views = views_scope.order(id: :desc).limit(5)
      render json: views
    end

    def create
      views_scope.create!(city: params[:city])
      head :ok
    end

    private

    def views_scope
      current_user.views
    end
  end
end
