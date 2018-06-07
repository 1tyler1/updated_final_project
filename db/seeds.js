require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise


const { User, Art, Comment } = require('./schema')

const Comment2 = new Comment(
  {
    title: "New Comment 2",
    comment: 'More Comments'
  }
)

const Comment1 = new Comment(
  {
    title: "New Comment",
    comment: 'Making comments'
  }
)

const Artwork_2 = new Art({
  title: 'First piece',
  url: "https://i.imgur.com/cGB1SN8.jpg"
})
const Artwork_1 = new Art({
  title: 'Second piece',
  url: "https://i.imgur.com/NEwl2Wr.jpg"
})
const Tyler = new User({
  userName: 'Tyler_fr0st',
  email: 'tylerlaurendesigns@gmail.com',
  art: [Artwork_1, Artwork_2],
  comments: [Comment1, Comment2]
})

User.remove({})
  .then(() => Tyler.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())
  .catch(console.error)