const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
module.exports = {
    async index(req,res){
        //retorna lista de posts cadastrados
        //com o -, os posts mais recentes ficam em cima na lista
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
    },
    async store(req,res){
        //desestruturação, funcionalidade do es6
        const {author, place, description, hashtags} = req.body;
        const {filename : image} = req.file;

        const [name] = image.split('.');
        const fileName = `${name}.jpg`;
        await sharp(req.file.path)
        .resize(500)
        .jpeg({quality : 70})
        .toFile(
            path.resolve(req.file.destination, 'resized', fileName )
        )
        fs.unlinkSync(req.file.path);

        //await simboliza uma função que pode demorar
        //então o sistema se prepara para a espera
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });

        req.io.emit('post', post);
        
        return res.json({post});
    }
};