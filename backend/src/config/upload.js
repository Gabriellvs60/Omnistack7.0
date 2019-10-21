const multer = require('multer');
const path = require('path');

module.exports = {
    //config de armazenamento local

    storage: new multer.diskStorage({
        //setando o destino do arquivo
        destination: path.resolve(__dirname, '..','..','uploads'),
        //setando nome ao arquivo
        filename: function(req,file, cb){
            cb(null, file.originalname);
        }
    })
};