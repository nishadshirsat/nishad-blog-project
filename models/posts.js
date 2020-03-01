//talk with mangodb
const mangoose = require('mongoose');

const postschema = mangoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

const Post = module.exports = mangoose.model('Post', postschema);