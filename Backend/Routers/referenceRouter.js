const express = require('express')
const { verifyToken } = require('../Middleware/jwtMiddleware')
const { getReference, addReference } = require('../Controller/referenceController')
const referenceRouter = express.Router()


referenceRouter.get('/getrefs', verifyToken,getReference)
referenceRouter.post('/addreference/:project_id', addReference)

module.exports = referenceRouter