use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :phx14dev_ts, Phx14devTsWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :phx14dev_ts, Phx14devTs.Repo,
  username: "postgres",
  password: "postgres",
  database: "phx14dev_ts_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
