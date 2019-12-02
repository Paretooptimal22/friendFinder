const express = require(`express`)
const { join } = require(`path`)

const app = express()

app.use(express.static(join(__dirname, `public`)))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require(`./app/routes/htmlRoutes.js`)(app)
require(`./app/routes/apiRoutes.js`)(app)

app.listen(process.env.PORT || 3000)