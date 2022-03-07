
// npm run dev in the main root to start client and server together with concurrently 

const express = require('express')
const { PORT } = require('./config')
const { log } = console
const cors = require('cors')
const bodyParser = require('body-parser')
const form = require('./routers/form')



const app = express()

async function server() {
    
    
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
    // app.use(cors())   // all request
    app.use(cors({

        exposedHeaders: ['x-auth-token'],
        origin: 'http://localhost:3006'

    }))
    app.options('*', cors())
    app.use(express.urlencoded({
        extended: false
    }))


    
    app.get('/',(req,res)=>{
        
        res.json({ message: 'ok', params:req.params, })
        
    })

    app.use('/form', form)
    

    app.listen(PORT, ()=>{
        console.log(`⚡⚡⚡⚡⚡ Server on port: ${PORT}`);
    })

}


server()