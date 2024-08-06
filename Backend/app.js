const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./DB/mongoDB')

const app = express()
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('Uploads'));
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

const authRouter = require('./Routers/authRouter')
const projectRouter = require('./Routers/projectRouter')
const referenceRouter = require('./Routers/referenceRouter')
const forumRouter = require('./Routers/forumRouter')
const submitRouter = require('./Routers/Postroutes')


app.use('/api/auth', authRouter)
app.use('/api/project', projectRouter)
app.use('/api/reference', referenceRouter)
app.use('/api/forum', forumRouter)
app.use('/api/submission', submitRouter)



//app.get('/*',function(req,res){res.sendFile(path.join(__dirname,'../Frontend/index.html'));});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../Frontend/dist/index.html'));
});
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})