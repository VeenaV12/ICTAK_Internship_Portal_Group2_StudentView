const express = require('express')
const { verifyToken } = require('../Middleware/jwtMiddleware')
const { updatePost, deletePost, getPosts, postQuery, getId, postReply } = require('../Controller/postController')
const forumRouter = express.Router()


forumRouter.post('/postquery/:student_id',postQuery)
forumRouter.get('/getpost',verifyToken,getPosts)
forumRouter.delete('/deletepost/:post_id',deletePost)
forumRouter.patch('/updatepost/:post_id',updatePost)
forumRouter.get('/getid', verifyToken,getId)
forumRouter.post('/postreply/:post_id',verifyToken,postReply)



module.exports = forumRouter