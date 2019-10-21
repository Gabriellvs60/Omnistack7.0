const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags : String,
    //aqui fica o nome da imagem
    image : String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    //cria um campo createdAt e UpdatedAt
    timestamps : true,
});

module.exports = mongoose.model('Post', PostSchema)