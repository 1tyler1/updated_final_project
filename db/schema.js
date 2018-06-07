const mongoose = require('mongoose');

const Schema = mongoose.Schema

const CommentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: false
  }
})

const ArtSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: "New Title"
  },
  url: {
    type: String,
    required: true,
    default: "New URL"
  }
})

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  art: [ArtSchema],
  
  comments: [CommentSchema]
})

// Create models for each schema
const User = mongoose.model('User', UserSchema)
const Art = mongoose.model('Art', ArtSchema)
const Comment = mongoose.model('Comment', CommentSchema)

// Export each model so they can be required elsewhere
module.exports = {
  User, Art, Comment
}