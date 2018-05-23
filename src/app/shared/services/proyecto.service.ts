import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Proyecto } from '../models/proyecto.model';

@Injectable()
export class ProyectoService {
  APIURL : string = 'http://localhost:55264/api/Proyectoes/';
  selectedProyecto : Proyecto;
  proyectoList : Proyecto[];
  
  constructor(private http : Http) { }

  //Metodo POST
  postProyecto(proy : Proyecto){
    var body = JSON.stringify(proy);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions ({method : RequestMethod.Post, headers : headerOptions});
    
    return this.http.post(this.APIURL,body,requestOptions).map(x => x.json());
  }

  //Metodo PUT
  putProyecto(id, proy){
    var body = JSON.stringify(proy);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions ({method : RequestMethod.Put, headers : headerOptions});
    
    return this.http.put(this.APIURL + id, body, requestOptions).map(res => res.json());
  }

  //Metodo GET LISTA
  getProyectoList(){
    this.http.get(this.APIURL)
    .map((data : Response) =>{
      return data.json() as Proyecto[];
    }).toPromise().then(x => {
      this.proyectoList = x;
    })
  }


  deleteProyecto(id: number) {
    return this.http.delete(this.APIURL + id).map(res => res.json());
  }
}
