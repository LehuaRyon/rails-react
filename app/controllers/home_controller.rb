class HomeController < ApplicationController
  def index
    @title = "Header Here"
    @greeting = "Hello from react-rails."
  end
end
