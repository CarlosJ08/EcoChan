import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders ,HttpResponse,HttpRequest,HttpHandler} from '@angular/common/http';
import {Usuarios} from './Usuarios';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';


const headers= new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  
@Injectable({
  providedIn: 'root'
})  

export class UsuariosService {
 handler:HttpHandler;

  constructor( private http:HttpClient) { }

  Sesion(Usu) {
    
    return this.http.get(`http://ecochan.byethost4.com/Sesion.php?Correo=${Usu.Correo},Contrasena=${Usu.Contraseña}`);
  }
  recuperarTodos() {
    return this.http.get(`http://ecochan.byethost4.com/recuperartodos.php`);
  }
  AgregarUsuario(Usuario){
    let json = JSON.stringify(Usuario);
    console.log(json);
    
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
             
    return this.http.post(`http://ecochan.byethost4.com/Agregar.php`, json, {headers: headers,responseType: 'text'});
    
   
 
}
}
   
  

