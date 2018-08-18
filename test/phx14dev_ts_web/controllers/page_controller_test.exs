defmodule Phx14devTsWeb.PageControllerTest do
  use Phx14devTsWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "Welcome to Phoenix!"
  end
end
