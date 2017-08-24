const choo = require("choo")
const app = choo()
const main = require("./templates/views/main")

// The Application Body

app.route("/", main)
app.mount("div")
