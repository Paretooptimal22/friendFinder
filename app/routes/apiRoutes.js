const path = require(`path`)

module.exports = app => {
  // GET ALL FRIENDS
  app.get('/friends', (req, res) => {
    res.json(friends)
  })

  // POST A FRIEND
  app.post('/friends', (req, res) => {
    friends.push(req.body)
    res.sendStatus(200)
  })

  

}