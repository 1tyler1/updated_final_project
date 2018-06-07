const express = require('express')
const { Comment } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  Comment.find()
    .then(Comments => {
      res.json(Comments)
      console.log(Comments)
    })
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  const newComment = new Comment(req.body.Comment)
    newComment.save()
    .then((Comment) => {
      res.json(Comment)
  })
    .catch((err) => {
    console.error(err)
  })
  })
  

router.get('/:CommentId', (req, res) => {
  Comment.findById(req.params.CommentId)
    .then(Comments => {
      res.json(Comments)
      console.log(Comments)
})
    .catch((err) => console.log(err))
})

router.delete('/:CommentId', (req, res) => {
  Comment.findByIdAndRemove (req.params.CommentId)
    .then((Comment) => {
       res.sendStatus(200)
  })
     .catch(console.error)
  });

router.patch('/:CommentId/', (req, res) => {
  Comment.findByIdAndUpdate(req.params.CommentId, req.body.Comment, {new: true})
  .then((Comment) => {
      res.json(Comment)
  }).catch((error) => {
      console.log(error)
  })
})




module.exports = router