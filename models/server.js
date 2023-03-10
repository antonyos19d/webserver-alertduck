const express = require('express');
require('dotenv').config();

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.middlewares();

        this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'));

        //LECTURA Y PARSEO DEL BODY -> post, put, delete):
        this.app.use(express.json());


    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en puerto: ', this.port);
        });
    }


}

module.exports = Server;


