const {Router} = require('express');
const{usuariosGet, usuariosPut, usuariosDelete, usuariosPost} = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('/:xid', usuariosPut);

router.delete('/', usuariosDelete);

router.post('/',usuariosPost);

module.exports = router;