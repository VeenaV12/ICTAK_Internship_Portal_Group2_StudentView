const express = require('express')
const { getProject, selectProject, displayProject, addProject } = require('../Controller/projectController')
const { verifyToken } = require('../Middleware/jwtMiddleware')
const projectRouter = express.Router()



projectRouter.get('/getproject', verifyToken,getProject)
projectRouter.post('/selectproject',verifyToken,selectProject)
projectRouter.get('/displayproject',verifyToken,displayProject)
projectRouter.post('/addproject',addProject)



module.exports = projectRouter