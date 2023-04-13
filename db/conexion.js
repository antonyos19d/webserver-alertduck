/*-Usando sequelize
-------------------*/
const { Sequelize } = require('sequelize');

const db = new Sequelize("dbprueba","digitalcode","Mysql19%",
{host: "34.122.204.177", dialect: "mysql"});


module.exports = db;


/*-Usando mysql
---------------
var mysql = require('mysql');

var db2 = mysql.createConnection(
    {
        host: "34.122.204.177",
        user:"digitalcode",
        password: "Mysql19%",
        db: "dbprueba"
    }
);


module.exports = db2;*/