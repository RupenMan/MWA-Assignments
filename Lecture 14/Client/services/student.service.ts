import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {
  constructor(private http:Http) { 
    console.log("Service Initialized.....")
  }

  getStudents(){
      return this.http.get('http://localhost:3000/getData').map(res => res.json());
  }

  findById(id){
    return this.http.get('http://localhost:3000/students/profile/'+id).map(res => res.json());
  }
  
}