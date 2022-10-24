import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  constructor(private http: HttpClient) {}
  getTodos() {
    return this.http.get('https://dog.ceo/api/breeds/list/all');
  }
  getTodosImg(sel:any) {
    return this.http.get('https://dog.ceo/api/breed/'+sel+'/images/random');
  }

}
