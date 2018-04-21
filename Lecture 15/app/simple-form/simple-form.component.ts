import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { SimpleFormService } from '../services/simple-form.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})

@Injectable()
export class SimpleFormComponent implements OnInit, OnDestroy {
  public name:string;
  public email:string;
  public post:string;
  public userId:string;

  user:any;
  userPost:any;
  private subscription:Subscription;
  constructor(private simpleFormService:SimpleFormService) { }

  ngOnInit() {
  }

  getData(id){
    this.subscription = this.simpleFormService.getDataUsingParam(id).subscribe(
      (data) => {
        this.user = data;
        this.name=this.user.name;
        this.email = this.user.email;
        this.post=this.user.company.name;
        this.getDataUsingQuery(id);
        return true;
      },
      err => {
        console.log("Data Not Fetched");
        // return Observable.throw(err);
      }
    );
  }

  getDataUsingQuery(id){
    this.subscription = this.simpleFormService.getDataUsingQuery(id).subscribe(
      data => {
        this.userPost = data;
        console.log(this.userPost);
        return true;
      },
      err => console.log("Post Not Fetched")
    )
  }

  onSubmit(){
    let newUser={
      name:this.name,
      email: this.email,
      post: this.post
    };
    console.log(newUser);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
