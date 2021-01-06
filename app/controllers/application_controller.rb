class ApplicationController < ActionController::API
  def frontend
    render file: 'public/index.html'
  end
end
