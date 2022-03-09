
const router = require('express').Router()
const Post = require('../models/Post')

    
// CREATE NEW POST

router.post('/', async (req, res) => {

    const newPost = new Post({

        title: req.body.title,
        desc: req.body.desc,
        username: req.body.username
    })

    try{

        const savedPost = await  newPost.save()
        res.status(200).json(savedPost)

    } catch(err) {

        res.status(500).json(err)
    }
})
    



// UPDATE POST

router.put('/:id', async (req, res) => {


    try{

        const trimmed = req.params.id.trim()    // !!!

        const post = await Post.findById(trimmed)   

        if(post.username === req.body.username) {

            try {

                const updatedPost = await Post.findByIdAndUpdate(

                    trimmed,

                    {
                        $set: req.body,
                        
                    },
            
                    { new: true }
            
                );

                res.status(200).json(updatedPost);
            
            } catch(err) {

                res.status(500).json(err)
            }

        }else {

            res.status(401).json("it isn't your post")
        } 

    } catch(err) {

        res.status(500).json(err)
    }

        

    
    
})


// DELETE POST

router.delete('/:id', async (req, res) => {


    try{

        
        const trimmed = req.params.id.trim()   // !!!
    
        const post = await Post.findById(req.params.id)
        
        if(post.username === req.body.username) {

            try {

                const deletedPost = await Post.findByIdAndDelete(trimmed);

                console.log(deletedPost);

                res.status(200).json('post has been deleted');
            
            } catch(err) {

                res.status(500).json(err)
            }

        }else {

            res.status(401).json("it isn't your post")
        }

    } catch(err) {

        res.status(500).json(err)
    }
})

    
// GET POST

router.get('/:id', async (req, res)=> {

    try {
        
        const trimmed = req.params.id.trim()
        const post = await Post.findById(trimmed)
        res.status(200).json(post)

    } catch (err) {

        res.status(500).json(err)
    }
})



// GET ALL


router.get('/', async (req,res) => {


    const username = req.query.user
    const category = req.query.cat

    try {

        let posts

        if(username) {

            posts = await Post.find({username})

        } else if(category) {

            posts = await Post.find({categories: {

                $in: [cat]

            }})

        } else {

            posts = Post.find()
        }
        res.status(200).json(posts)

    } catch(err) {

        res.status(500).json(err)
    }
})


module.exports = router