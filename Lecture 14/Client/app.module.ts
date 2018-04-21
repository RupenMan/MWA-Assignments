import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';
import {StudentService} from './services/student.service';
import {HttpModule} from '@angular/http';
import { ProfileComponent } from './profile/profile.component';

const MY_ROUTES = [
  {path:"", redirectTo: "homepage", pathMatch:"full"},
  {path:"homepage", component:HomepageComponent},
  {path:"students", component:StudentsComponent,
children:[
  {path:"profile/:id", component:ProfileComponent}
]},
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MY_ROUTES),
    HttpModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
