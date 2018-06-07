const express = require('express')
const { Art } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  Art.find()
    .then(arts => {
      res.json(arts)
      console.log(arts)
    })
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  const newArt = new Art(req.body.Art)
    newArt.save()
    .then((Art) => {
      res.json(Art)
  })
    .catch((err) => {
    console.error(err)
  })
  })
  

router.get('/:ArtId', (req, res) => {
  Art.findById(req.params.ArtId)
    .then(Arts => {
      res.json(Arts)
      console.log(Arts)
})
    .catch((err) => console.log(err))
})

router.delete('/:ArtId', (req, res) => {
  Art.findByIdAndRemove (req.params.ArtId)
    .then((Art) => {
       res.sendStatus(200)
  })
     .catch(console.error)
  });

router.patch('/:ArtId/', (req, res) => {
  Art.findByIdAndUpdate(req.params.ArtId, req.body.Art, {new: true})
  .then((Art) => {
      res.json(Art)
  }).catch((error) => {
      console.log(error)
  })
})




module.exports = router