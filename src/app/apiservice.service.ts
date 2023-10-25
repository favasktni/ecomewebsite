import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor( private http:HttpClient) { }

  getPost(){
    return this.http.get<any>('http://localhost:3000/Ecome')
  }
}
// https://fakestoreapi.com/products
  