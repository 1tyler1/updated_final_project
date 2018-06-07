const express = require('express')
const { Weight } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
  Weight.find()
    .then(weight => {
      res.json(weight)
      console.log(weight)
    })
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  Weight.findById(req.params.WeightId)
    .then((Weight) => {
      Weight.photos.push(new Photo())
      Weight.save()
        .then((data) => {
          res.json(data)
        })
    })
    .catch((err) => {
      console.error(err)
    })
})

router.get('/:WeightId', (req, res) => {
  Weight.findById(req.params.WeightId)
    .then(Weight => {
      res.json(weight)
      console.log(weight)
})
    .catch((err) => console.log(err))
})

router.delete('/:WeightId', (req, res) => {

    Weight.findById(req.params.WeightId)
    .then((Weight) => {
        Weight.update({
            $pull:
            { photos: {_id: req.params.id} }
        })
        .then((data) => {
            res.sendStatus(200)
        })
        .catch(console.error)
    })
    .catch(console.error)
});

router.patch('/:WeightId', (req, res) => {
    Weight.findById(req.params.WeightId).then((Weight) => {
      const update = req.body.photo
      const photo = Weight.photo.id(req.params.id)
      if (update.title) {
        photo.title = update.title
      }
      if (update.description) {
        photo.description = update.description
      }
      Weight.save().then((Weight) => {
        Weight.photos = Weight.photos.reverse()
        res.json(Weight)
      })
    })
  })




module.exports = router