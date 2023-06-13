import mongoose from "mongoose";
// import { userSchema } from './users.js'

const postSchema = new mongoose.Schema({
  author: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
  // Tweets are limited to 1-280 characters
  text: {
    type: String,
    minLength: 1,
    maxLength: 280
  },
  date: Date,
})

export default mongoose.model('Post', postSchema)
