import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders ,HttpResponse,HttpRequest,HttpHandler, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  constructor(private http:HttpClient) { }
  Responder(Respuesta){
    let json = JSON.stringify(Respuesta);
    console.log(json);
    let headers = new HttpHeaders().set('Content-Type',' application/json');
             
    return this.http.post(`http://ecochan.byethost4.com/Responder.php`, json, {headers: headers,responseType: 'text'});
 
}
Listar(id){
  let headers = new HttpHeaders().set('Content-Type',' application/json');
  let param=id;
  return this.http.get(`http://ecochan.byethost4.com/ObtenerRespuestas.php`,{headers: headers,responseType: 'json',params:param});
}
}
