import { Router } from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/users.js'

const SECRET_KEY = process.env.SECRET_KEY

// Set token expiration to 30 minutes
function getExpiration() {
  const d = new Date()
  d.setMinutes(d.getMinutes() + 30)
  return d.getTime()
}

const router = Router()

// api/auth/signup
router.post('/signup', async (req, res) => {
  try {
    // handle user input
    const { username, password } = req.body
    // hash the password
    const hash = await bcrypt.hash(password, 10)
    // create new user
    const user = await User.create({
      username,
      hash,
      handle: username,
    })

    const data = {
      id: user._id,
      handle: user.handle,
      exp: getExpiration(),
    }

    // Take user data, and expiration, and create a token along with the SECRET_KEY
    const token = jwt.sign(data, SECRET_KEY)

    // return the token
    return res.status(200).json({
      status: 200,
      message: `Successfully created user: ${user.handle}`
    }) 
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: `Unable to create user`,
      database_message: error.message,
    })
  }
})

// TODO fix username and handle confusion
router.post('/signin', async (req, res) => {
  try {
    // handle user input
    const { username, password } = req.body
    // Get user's password hash
    const user = await User.findOne({ handle: username })
    const hash = user.hash

    // Check that the hashes match
    const result = await bcrypt.compare(password, hash)
    if (!result) {
      return res.status(401).json({
        message: 'Incorrect password'
      })
    }

    // Same code as signup from this point onwards
    const data = {
      id: user._id,
      handle: user.handle,
      exp: getExpiration(),
    }

    // sign the jwt
    const token = jwt.sign(data, SECRET_KEY)

    // return the token
    return res.status(200).json({
      status: 200,
      message: `Successfully signed in @${user.handle}`,
      token: token
    })
  } catch (error) {
    res.status(404).json({
      status: 404,
      error: `User not found`,
      database_message: error.message,
    })
  }
})

export default router