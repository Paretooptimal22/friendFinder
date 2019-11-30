const express = require(`express`)

const app = express()

app.use(express.static(__dirname, `public`))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(process.env.PORT || 3000)