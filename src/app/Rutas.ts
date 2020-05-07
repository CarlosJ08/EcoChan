import {Usuarios} from './Usuarios';
declare function require(name:string);
var db= require('./Querys');

function https(){

  this.configurar= function(app){
    app.post('/Usuarios/', function(solicitud,respuesta)
    {
      db.Agregar(solicitud.body,respuesta); 
    })
  }
}

module.exports= new https();