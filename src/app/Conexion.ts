
var mysql= require('mysql');

function Conectar()
{
    this.pool=null;
    this.iniciar=function()
    {
this.pool= mysql.createConnection({
    connectionLimit:10,
    host:'sql303.byethost.com',
    user:'b4_25611203',
    password:'estufas',
    database:'b4_25611203_Foro'
})
    }
    this.obtener= function(callback){
        this.pool.getConnection(function(error,connection)
        {
            callback(error,connection);
        })
        
    }
  
}


module.exports = new Conectar();