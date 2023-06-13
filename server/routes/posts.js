import { Router } from "express";
import * as postController from '../controllers/posts.js'
import verifyAuth from "../middlewares/veryAuth.js";

const router = Router()

// Protected routes
// GET
router.get('/', verifyAuth, postController.getPosts)
router.get('/:id', verifyAuth, postController.getPostById)

// POST
router.post('/', verifyAuth, postController.createPost)

export default router
