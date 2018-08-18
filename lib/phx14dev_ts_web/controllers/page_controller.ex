defmodule Phx14devTsWeb.PageController do
  use Phx14devTsWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
