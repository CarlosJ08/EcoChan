import {Usuarios} from './Usuarios';
declare function require(name:string);
var Conexion= require('./Conexion');

function Metodos(){

this.Agregar= function(Usuario:Usuarios, respuesta){
   Conexion.obtener(function(er,cn)
   {
       cn.query('insert into Usuarios set ?',Usuario,function(error, resultado){
       cn.release();
       if(error)
       {
           respuesta.send({estado:'Error'});
       }    
       else{
           respuesta.send({estado:'Ok'});
       }
    })
   })
} 

}

module.exports= new Metodos();