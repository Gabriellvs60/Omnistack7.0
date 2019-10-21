const express = require ('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
//15:00 aula 2
const app = express();

//aceitando conexoes http e websocket
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://astolfo:1234@cluster0-i9cmz.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology: true,    
useNewUrlParser: true,
}).then(() => console.log('DB Connected!'))
.catch(err => {
console.log("DB Connection Error");
});

//nosso middleware usando io
app.use((req, res, next)=> {
    req.io = io;

    next();
})

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..' , 'uploads', 'resized')))

//todas as rotas ficam no arquivo routes.js
app.use(require('./routes'));
//ouça o app
server.listen(3333);
