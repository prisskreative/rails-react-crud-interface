class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # change this
  # protect_from_forgery with: :exception
  # for
  protect_from_forgery with: :null_session
end
