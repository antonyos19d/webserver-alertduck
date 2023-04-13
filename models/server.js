const express = require('express');
require('dotenv').config();

const db = require('../db/conexion');
const db2 = require('../db/conexion');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        /*
        db2.connect(function(error){
            if(error){
                console.log(No se puede conectar', error.message);
            }else{
                console.log('conexion exitosa');
            }
        });
        */
        
        db.authenticate().then(()=>{console.log('conexion exitosa')}).catch(err=>{console.log('No se pudo conectar, msg:', err)}); 
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


