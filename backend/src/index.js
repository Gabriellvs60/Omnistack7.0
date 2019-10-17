const express = require ('express');
const mongoose = require('mongoose');
//15:00
const app = express();

mongoose.connect('mongodb+srv://astolfo:<password>@cluster0-i9cmz.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});
//rota
app.get('/',(req, res) => {
    //req e res com retorno é um middleware
    return res.send('Hello Worls ${req.query.name}');
})

//ouça o app
app.listen(3333);
