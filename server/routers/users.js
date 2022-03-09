const router = require('express').Router()
const User = require('../models/User')
// const Post = require('../models/Post')
const bcrypt = require('bcrypt')


// UPDATE

router.put('/:id', async (req, res)=>{
    
    if (req.body.id === req.params.id){

       if (req.body.password) {
           const salt = await bcrypt.genSalt(10)
           req.body.password = await bcrypt.hash(req.body.password, salt)
       }
       try {

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        
        res.status(200).json(updatedUser);
        

       } catch (err) {
           res.status(500).json(err)
       }

    } else {
        res.status(401).json({message: `it isn't your account`})
    } 
})
    



// DELETE

router.delete('/:id', async (req, res)=>{

    if (req.body.id === req.params.id){

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
 
            const user = await User.findById(req.params.id);

            try {

                // await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json('User has been deleted');

            } catch (err) {
                res.status(500).json(err);
            }
           
 
        } catch (err) {
            res.status(404).json('user not found')
        }
 
     } else {
         res.status(401).json({message: `it isn't your account`})
     }
})



// GET USER

router.get('/:id', async (req, res)=> {

    try {
        console.log('works');
        const user = await User.findById(req.params.id)
        res.status(200).json(user.username)

    } catch (err) {
        res.status(500).json(err)
    }
})

 

module.exports = router