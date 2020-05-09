import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders ,HttpResponse,HttpRequest,HttpHandler, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  handler:HttpHandler;

  constructor( private http:HttpClient) { }
  AgregarPublicacion(Publicacion){
    let json = JSON.stringify(Publicacion);
    console.log(json);
    let headers = new HttpHeaders().set('Content-Type',' application/json');
             
    return this.http.post(`http://ecochan.byethost4.com/Publicar.php`, json, {headers: headers,responseType: 'text'});
 
}
  Listar(){
    let headers = new HttpHeaders().set('Content-Type',' application/json');
   
    return this.http.get(`http://ecochan.byethost4.com/recuperartodos.php`,{headers: headers,responseType: 'json'});
  }
}
