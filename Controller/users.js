const express = require('express')
const { User } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users)
      console.log(users)
    })
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  const newUser = new User(req.body.user)
    newUser.save()
    .then((user) => {
      res.json(user)
  })
    .catch((err) => {
    console.error(err)
  })
  })
  

router.get('/:userId', (req, res) => {
  User.findById(req.params.userId)
    .then(users => {
      res.json(users)
      console.log(users)
})
    .catch((err) => console.log(err))
})

router.delete('/:userId', (req, res) => {
  User.findByIdAndRemove (req.params.userId)
    .then((user) => {
       res.sendStatus(200)
  })
     .catch(console.error)
  });

router.patch('/:userId/', (req, res) => {
  User.findByIdAndUpdate(req.params.userId, req.body.user, {new: true})
  .then((user) => {
      res.json(user)
  }).catch((error) => {
      console.log(error)
  })
})




module.exports = router