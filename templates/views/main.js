const html = require("choo/html")

render = (state, emit) => {
    return html`
        <div class="container">
            <h1>Hello World!</h1>
        </div>
    `
}

module.exports = render
