const express = require('express').Router()
const emailMe = require('../emailMe')
const emailTo = require('../emailTo')


const form = express.Router()

form.post('/', async(req,res)=>{

    myJson = Object.keys(req.body)
    myObj = JSON.parse(myJson[0])
    const { title, name, surname, email, message, recruiter } = myObj
    console.log(myObj);

    emailMe(title, name, surname, email, message, recruiter,  (err, data)=>{   

        console.log(name,email,text);

        if (err) {
            console.log('ERROR: ', err);
            return res.status(500).json({ message: 'error'})

        }else {

            console.log('email sent');
            return res.json({ message: 'email sent'})
            
        }
            
    })

    emailTo(email)

})

module.exports = router