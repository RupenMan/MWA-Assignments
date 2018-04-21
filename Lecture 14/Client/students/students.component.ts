import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[StudentService]
})

export class StudentsComponent implements OnInit {
  
  studentList:Student[];
  constructor(private studentService:StudentService) { 
    this.studentService.getStudents().subscribe(studentList => this.studentList=studentList);
  }

  ngOnInit() {
  }

}
