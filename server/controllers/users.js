import User from '../models/users.js'
import Post from '../models/posts.js'

export async function getProfile(req, res) {
  const handle = req.params.handle
  // TODO how to aggregate? use .populate()
  const user = await User.findOne({ handle })
  // Grab all posts for the user
  const posts = await Post.find({ author: user._id })
  // ...user.toJSON() allows us to return a single {} from our API response
  return res.json({
    ...user.toJSON(),
    posts,
  })
}