// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
declare function require(name: string): string
require("../css/app.scss")

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

require("babel-polyfill")
import * as React from "react"
import ReactDOM from "react-dom"
import { RootComponent } from "./app/root-component"

ReactDOM.render(<RootComponent />, document.getElementById("app"))
