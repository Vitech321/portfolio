
// npm run dev in the main root to start client and server together with concurrently 

require('dotenv').config()
const express = require('express')
const { PORT } = require('./config')
const { json, application } = require('express')
const mongoose = require('mongoose')
const { log } = console
const cors = require('cors')
const bodyParser = require('body-parser')
const form = require('./routers/form')
const auth = require('./routers/auth')
const users = require('./routers/users')
const posts = require('./routers/posts')



async function server() {


    mongoose.connect(process.env.MONGO_URL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    })
    .then(console.log('db connected'))
    .catch(err=>log(err))
    

    const app = express()
    app.use(express.urlencoded({extended: false}))
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
    app.use(cors())   // all request
    /* app.use(cors({

        exposedHeaders: ['x-auth-token'],
        origin: 'http://localhost:3006'

    })) */
    app.options('*', cors())
    


    
    app.get('/',(req,res)=>{
        
        res.json({ message: 'ok', params:req.params, })
        
    })

    app.use('/form', form)
    app.use('/auth', auth)
    app.use('/users', users)
    app.use('/posts', posts)

    

    app.listen(PORT, ()=>{
        log(`⚡⚡⚡⚡⚡ Server on port: ${PORT}`);
    })

}


server()