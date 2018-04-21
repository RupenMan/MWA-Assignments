import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class SimpleFormService {

  constructor(private httpClient: HttpClient) { }

  getDataUsingParam(id) {
    return this.httpClient.get(`http://jsonplaceholder.typicode.com/users/${id}`);
  }

  getDataUsingQuery(id){
    return this.httpClient.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
