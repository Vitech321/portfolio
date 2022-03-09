const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')




// REGISTER

router.post('/register', async (req, res)=>{
    
    try{
         
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            password: hashedPass
        })

        const user = await newUser.save()

        res.status(200).json(user)

    } catch(err){

        res.status(500).json(err)

    }

})
   





// LOGIN

router.post('/login', async(req,res)=>{

    try {

        let user = await User.findOne({username: req.body.username})
        !user && res.status(400).json({message: 'wrong credentials'})
        
        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json({message: 'wrongs credentials1'})

        const { username } = user 
        res.json(username) 

    } catch (err) {

        res.status(500).json(err)
    }


})




module.exports = router

