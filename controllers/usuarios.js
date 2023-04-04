const{request,response} = require('express');

const usuariosGet = (req = request, res =response)=>{
    const yparams = req.query;

    res.json({
        mensaje:"Get API CONTROLLER: recibiendo querys",
        yparams
    });
}

const usuariosPut = (req = request, res =response)=>{
    const yid = req.params.xid;

    res.json({
        mensaje:"Put API CONTROLLER: recibiendo parametros o segmento de ruta",
        yid
    });
}

const usuariosDelete = (req = request, res =response)=>{

    res.send("Delete API CONTROLLER:");
}

const usuariosPost = (req = request, res =response)=>{

    res.send("Post API CONTROLLER:");
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPost
}