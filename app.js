//prioridad 1: importaciones del mismo node
//prioridad 2: importaciones de tercero
//prioridad 3: importaciones de propias



const Server = require('./models/server');

const xserver = new Server();

xserver.listen();