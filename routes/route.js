const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

//get all posts
router.get('/posts', function (req, res, next) {
    // res.send('retriving data from posts');
    Post.find(function (err, post) {
        res.json(post);
    });
});

//post blog
router.post('/post', function (req, res, next) {
    //logic to add post

    let newPost = new Post({
        title: req.body.title,
        description: req.body.description
    });
    newPost.save((err, post) => {
        if (err) {
            res.json({
                msg: 'Failed to add contacts'
            });
        } else {
            res.json({
                msg: 'Post added successfully'
            });
        }
    });
});

//delete particular post
router.delete('/post/:id', function (req, res, next) {
    //logic to delete post
    Post.remove({
        _id: req.params.id
    }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;