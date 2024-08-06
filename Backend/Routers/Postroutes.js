const express = require('express');
const { verifyToken } = require('../Middleware/jwtMiddleware');
const { getsubmission, postsubmission,getId, getsubmissiondata } = require('../Controller/Submitcontroller');
const submitRouter = express.Router();

submitRouter.get('/wsubmitdata', verifyToken, getsubmission);
// submitRouter.put('/addsubmission', verifyToken, postsubmission);
submitRouter.post('/addsubmissiondata', verifyToken, postsubmission);
submitRouter.post('/getsubmissiondata', verifyToken, getsubmissiondata);

// submitRouter.get('/getid', verifyToken,getId)



module.exports = submitRouter;
