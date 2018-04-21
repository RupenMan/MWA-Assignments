import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[StudentService]
})
export class ProfileComponent implements OnInit {
  id:string;
  student:any;
  constructor(private route: ActivatedRoute,private studentService:StudentService) {
    console.log("Profile Initialized...");
    
   }
  ngOnInit() {
    this.route.params.subscribe(param => this.id = param.id);
    this.student = this.studentService.findById(this.id).subscribe(res => this.student = res);
  }
}
