const mongoose = require('mongoose');

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema

const WeightSchema = new Schema({
  weighIn: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: false
  }
})

const PhotoSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: "New Title"
  },
  description: {
    type: String,
    required: true,
    default: "New Description"
  },
  created: {
    type: String,
    required: true,
    default: new Date()
  }
})

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photos: [PhotoSchema],
  
  weight: [WeightSchema]
})

// Create models for each schema
const User = mongoose.model('User', UserSchema)
const Photo = mongoose.model('Photo', PhotoSchema)
const Weight = mongoose.model('Weight', WeightSchema)

// Export each model so they can be required elsewhere
module.exports = {
  User, Photo, Weight
}